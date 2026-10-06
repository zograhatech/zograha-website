import { handle } from "@/lib/api";
import { deleteResource, getResource, updateResource } from "@/lib/crud";

type Ctx = { params: Promise<{ resource: string; id: string }> };

export const GET = handle<Ctx>(async (req, ctx) => {
  const { resource, id } = await ctx.params;
  return getResource(req, resource, id);
});
export const PATCH = handle<Ctx>(async (req, ctx) => {
  const { resource, id } = await ctx.params;
  return updateResource(req, resource, id);
});
export const DELETE = handle<Ctx>(async (req, ctx) => {
  const { resource, id } = await ctx.params;
  return deleteResource(req, resource, id);
});
