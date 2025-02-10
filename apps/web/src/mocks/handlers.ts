import type { HttpResponseResolver } from 'msw';
import { http, delay } from 'msw';




export function withDelay(resolver:HttpResponseResolver) : HttpResponseResolver {
    return async (...args) => {
        await delay(5000);
        return resolver(...args);
    };
}

export const handlers = [
    // http.get('*', withDelay(() => passthrough())),
    http.get('*', async () => {
        await delay(5000);
    }),
    // ...userHandlers,
];

