import { NextRequest } from "next/server";
import { createHash, timingSafeEqual } from "crypto";
import { ApiError } from "./api";

const digest = (s: string) => createHash("sha256").update(s).digest();

export function isAdmin(req: NextRequest) {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) return false;
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const provided = req.headers.get("x-admin-key") ?? bearer;
  if (!provided) return false;
  return timingSafeEqual(digest(provided), digest(expected));
}

export function requireAdmin(req: NextRequest) {
  if (!isAdmin(req)) throw new ApiError(401, "Unauthorized");
}
