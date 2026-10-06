import { NextRequest } from "next/server";
import { ApiError, cleanEmpty, getIp, handle, hashIp, ok, readJson } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validators";
import { esc, sendNotification } from "@/lib/mailer";

export const POST = handle(async (req: NextRequest) => {
  const data = contactSchema.parse(cleanEmpty(await readJson(req)));
  if (data.website) return ok({ received: true }, undefined, { status: 201 }); // bot: pretend success

  const ipHash = hashIp(getIp(req));
  const recent = await prisma.contactMessage.count({
    where: { ipHash, createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } },
  });
  if (recent >= 5) throw new ApiError(429, "Too many messages. Please try again later.");

  const { website: _w, ...rest } = data;
  const saved = await prisma.contactMessage.create({ data: { ...rest, ipHash } });

  await sendNotification(
    `New enquiry from ${saved.name}`,
    `<h2>New contact message</h2>
     <p><b>Name:</b> ${esc(saved.name)}<br><b>Email:</b> ${esc(saved.email)}<br><b>Phone:</b> ${esc(saved.phone)}<br>
     <b>Service:</b> ${esc(saved.service)}<br><b>Subject:</b> ${esc(saved.subject)}</p>
     <p style="white-space:pre-wrap">${esc(saved.message)}</p>`,
    saved.email
  );
  return ok({ id: saved.id, received: true }, undefined, { status: 201 });
});
