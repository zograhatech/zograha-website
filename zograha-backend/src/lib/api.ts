import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import { createHash } from "crypto";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public details?: unknown
  ) {
    super(message);
  }
}

export type Meta = Record<string, unknown>;

export function ok(data: unknown, meta?: Meta, init?: { status?: number; headers?: Record<string, string> }) {
  return NextResponse.json({ success: true, data, ...(meta ? { meta } : {}) }, init);
}

export const PUBLIC_CACHE = { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" };

export function errorResponse(status: number, message: string, details?: unknown) {
  return NextResponse.json({ success: false, error: { message, ...(details ? { details } : {}) } }, { status });
}

/** Wraps a route handler with consistent error handling. */
export function handle<C = unknown>(fn: (req: NextRequest, ctx: C) => Promise<Response>) {
  return async (req: NextRequest, ctx: C): Promise<Response> => {
    try {
      return await fn(req, ctx);
    } catch (e) {
      if (e instanceof ApiError) return errorResponse(e.status, e.message, e.details);
      if (e instanceof ZodError) {
        return errorResponse(422, "Validation failed", e.flatten().fieldErrors);
      }
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") return errorResponse(409, "A record with this unique value already exists");
        if (e.code === "P2025") return errorResponse(404, "Record not found");
      }
      console.error("[API ERROR]", e);
      return errorResponse(500, "Something went wrong. Please try again later.");
    }
  };
}

export async function readJson(req: NextRequest): Promise<Record<string, unknown>> {
  try {
    const body = await req.json();
    if (!body || typeof body !== "object") throw new Error();
    return body as Record<string, unknown>;
  } catch {
    throw new ApiError(400, "Invalid JSON body");
  }
}

/** Form fields often arrive as "" — treat them as missing. */
export function cleanEmpty(obj: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== "" && v !== null && v !== undefined));
}

export function getIp(req: NextRequest) {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
}

export function hashIp(ip: string) {
  return createHash("sha256")
    .update(ip + (process.env.IP_HASH_SALT ?? ""))
    .digest("hex")
    .slice(0, 32);
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}
