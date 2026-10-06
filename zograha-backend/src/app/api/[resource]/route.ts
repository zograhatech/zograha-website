import { handle } from "@/lib/api";
import { createResource, listResource } from "@/lib/crud";

type Ctx = { params: Promise<{ resource: string }> };

export const GET = handle<Ctx>(async (req, ctx) => listResource(req, (await ctx.params).resource));
export const POST = handle<Ctx>(async (req, ctx) => createResource(req, (await ctx.params).resource));
