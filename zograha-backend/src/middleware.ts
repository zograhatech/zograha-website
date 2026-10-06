import { NextRequest, NextResponse } from "next/server";

const allowed = (process.env.FRONTEND_ORIGINS ?? "http://localhost:3000,http://localhost:5173")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export function middleware(req: NextRequest) {
  const origin = req.headers.get("origin");
  const headers: Record<string, string> = { Vary: "Origin" };

  if (origin && (allowed.includes("*") || allowed.includes(origin))) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Methods"] = "GET,POST,PATCH,DELETE,OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization, x-admin-key";
    headers["Access-Control-Max-Age"] = "86400";
  }
  if (req.method === "OPTIONS") return new NextResponse(null, { status: 204, headers });

  const res = NextResponse.next();
  for (const [k, v] of Object.entries(headers)) res.headers.set(k, v);
  return res;
}

export const config = { matcher: "/api/:path*" };
