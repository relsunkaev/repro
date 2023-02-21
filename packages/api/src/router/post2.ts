import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const post2Router = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma2.post2.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma2.post2.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma2.post2.create({ data: input });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma2.post2.delete({ where: { id: input } });
  }),
});
