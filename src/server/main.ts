import express from "express";
import ViteExpress from "vite-express";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
const app = express();

import { router, publicProcedure } from './trpc.js';
 
let counter = 0;

const appRouter = router({
  getCounter: publicProcedure
    .query(() => ({ count: counter })),
    
  incrementCounter: publicProcedure
    .mutation(() => {
      counter += 1;
      return { count: counter };
    })
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;


// Add tRPC middleware
app.use('/trpc', createExpressMiddleware({ router: appRouter }));

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
