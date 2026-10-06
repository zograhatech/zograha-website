import { handle, ok } from "@/lib/api";
import { requireAdmin } from "@/lib/auth";
import { inboxDb } from "@/lib/inbox";

type Ctx = { params: Promise<{ inbox: string }> };

export const GET = handle<Ctx>(async (req, ctx) => {
  requireAdmin(req);
  const db = inboxDb((await ctx.params).inbox);
  const sp = req.nextUrl.searchParams;
  const page = Math.max(1, parseInt(sp.get("page") ?? "1") || 1);
  const limit = Math.min(100, Math.max(1, parseInt(sp.get("limit") ?? "20") || 20));
  const status = sp.get("status");
  const where = status ? { status } : {};
  const [items, total] = await Promise.all([
    db.findMany({ where, orderBy: { createdAt: "desc" }, skip: (page - 1) * limit, take: limit, omit: { ipHash: true } }),
    db.count({ where }),
  ]);
  return ok(items, { page, limit, total, totalPages: Math.ceil(total / limit) });
});
