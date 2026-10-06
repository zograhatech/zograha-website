import { prisma } from "./prisma";
import { ApiError } from "./api";

export function inboxDb(inbox: string) {
  if (inbox === "contact") return prisma.contactMessage as any;
  if (inbox === "applications") return prisma.jobApplication as any;
  throw new ApiError(404, "Not found");
}
