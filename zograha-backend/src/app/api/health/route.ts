import { handle, ok } from "@/lib/api";
import { prisma } from "@/lib/prisma";

export const GET = handle(async () => {
  await prisma.$queryRaw`SELECT 1`;
  return ok({ status: "healthy", time: new Date().toISOString() });
});
