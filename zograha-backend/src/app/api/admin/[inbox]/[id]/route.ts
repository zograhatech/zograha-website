import { handle, ok, readJson } from "@/lib/api";
import { requireAdmin } from "@/lib/auth";
import { inboxDb } from "@/lib/inbox";
import { inboxStatusSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ inbox: string; id: string }> };

export const PATCH = handle<Ctx>(async (req, ctx) => {
  requireAdmin(req);
  const { inbox, id } = await ctx.params;
  const { status } = inboxStatusSchema.parse(await readJson(req));
  return ok(await inboxDb(inbox).update({ where: { id }, data: { status }, omit: { ipHash: true } }));
});

export const DELETE = handle<Ctx>(async (req, ctx) => {
  requireAdmin(req);
  const { inbox, id } = await ctx.params;
  await inboxDb(inbox).delete({ where: { id } });
  return ok({ deleted: true });
});
