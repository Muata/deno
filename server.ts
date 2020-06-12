import { createApp, serveStatic } from "https://servestjs.org/@v1.1.0/mod.ts";
import { cors } from "https://servestjs.org/@v1.1.0/middleware/cors.ts";
const app = createApp();
// All requests will be processed and matched files in "public" directory
// are served automatically
// Otherwise, request will be passed to next handler

app.use(
serveStatic("./public"));
app.listen({ port: 8000 });
