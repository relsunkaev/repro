import { authRouter } from "./router/auth";
import { postRouter } from "./router/post";
import { post2Router } from "./router/post2";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  post2: post2Router,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
