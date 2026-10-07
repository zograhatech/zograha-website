import { NextRequest } from "next/server";
import { put } from "@vercel/blob";
import {
  ApiError,
  cleanEmpty,
  getIp,
  handle,
  hashIp,
  ok,
  readJson,
} from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { applicationSchema } from "@/lib/validators";
import { esc, sendNotification } from "@/lib/mailer";

const MAX_BYTES = 5 * 1024 * 1024;

const ALLOWED = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

// Accepts JSON or multipart/form-data
// Field `resume` = PDF/DOC/DOCX, max 5MB
export const POST = handle(async (req: NextRequest) => {
  let fields: Record<string, unknown> = {};
  let file: File | null = null;

  if ((req.headers.get("content-type") ?? "").includes("multipart/form-data")) {
    const fd = await req.formData();

    for (const [k, val] of fd.entries()) {
      if (typeof val === "string") {
        fields[k] = val;
      } else if (k === "resume" && val.size > 0) {
        file = val;
      }
    }
  } else {
    fields = await readJson(req);
  }

  const data = applicationSchema.parse(cleanEmpty(fields));

  if (data.website) {
    return ok({ received: true }, undefined, { status: 201 });
  }

  const ipHash = hashIp(getIp(req));

  const recent = await prisma.jobApplication.count({
    where: {
      ipHash,
      createdAt: {
        gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    },
  });

  if (recent >= 5) {
    throw new ApiError(
      429,
      "Too many applications from this connection. Please try again later.",
    );
  }

  let jobId: string | undefined;
  let jobTitle = data.jobTitle ?? undefined;

  if (data.jobId) {
    const job = await prisma.job.findFirst({
      where: {
        published: true,
        OR: [{ id: data.jobId }, { slug: data.jobId }],
      },
    });

    if (!job) {
      throw new ApiError(404, "This job opening is no longer available");
    }

    jobId = job.id;
    jobTitle = job.title;
  }

  let resumeUrl = data.resumeUrl;

  // Resume upload
  if (file) {
    const f: File = file;

    if (!ALLOWED.has(f.type)) {
      throw new ApiError(422, "Validation failed", {
        resume: ["Upload a PDF, DOC or DOCX file"],
      });
    }

    if (f.size > MAX_BYTES) {
      throw new ApiError(422, "Validation failed", {
        resume: ["File must be 5MB or smaller"],
      });
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      throw new ApiError(
        503,
        "Resume uploads are not configured on the server",
      );
    }

    const safe = f.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-80);

    // PRIVATE Vercel Blob storage
    const blob = await put(`resumes/${safe}`, f, {
      access: "private",
      addRandomSuffix: true,
    });

    resumeUrl = blob.url;
  }

  const { website: _w, jobId: _j, jobTitle: _t, resumeUrl: _r, ...rest } = data;

  const saved = await prisma.jobApplication.create({
    data: {
      ...rest,
      jobId,
      jobTitle,
      resumeUrl,
      ipHash,
    },
  });

  await sendNotification(
    `New job application: ${saved.name}${jobTitle ? ` — ${jobTitle}` : ""}`,
    `<h2>New career application</h2>
     <p>
       <b>Role:</b> ${esc(jobTitle ?? "General application")}<br>
       <b>Name:</b> ${esc(saved.name)}<br>
       <b>Email:</b> ${esc(saved.email)}<br>
       <b>Phone:</b> ${esc(saved.phone)}<br>
       <b>Experience:</b> ${esc(saved.experience)}<br>
       <b>Resume:</b> ${
         saved.resumeUrl
           ? `<a href="${esc(saved.resumeUrl)}">Download</a>`
           : "Not provided"
       }
     </p>
     <p style="white-space:pre-wrap">
       ${esc(saved.coverLetter)}
     </p>`,
    saved.email,
  );

  return ok(
    {
      id: saved.id,
      received: true,
    },
    undefined,
    {
      status: 201,
    },
  );
});
