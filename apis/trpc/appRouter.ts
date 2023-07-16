import { initTRPC } from '@trpc/server';
import {getBanner} from "../lib/bannersQuery";
import { OpenApiMeta } from 'trpc-openapi';
import {number, z} from 'zod'


export const t = initTRPC.meta<OpenApiMeta>().create();

export const appRouter = t.router({
    getBanner: t.procedure
        .meta({ openapi: { method: 'GET', path: '/api/banner' } })
        .input(z.object({ }))
        .output(z.promise(z.string()))
        .query(async (opts) => {
            const res = await getBanner()
            return JSON.stringify(res);
        }),
});

export type AppRouter = typeof appRouter;