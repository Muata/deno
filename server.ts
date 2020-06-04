import {
	createApp,
	createRouter,
	serveStatic,
} from "https://servestjs.org/@v1.1.0/mod.ts";
import {
	cors,
} from "https://servestjs.org/@v1.1.0/middleware/cors.ts";
const app = createApp();
app.use(
	// allow access to static resource only from (*.)servestjs.org
	cors({
		origin: "*",
		methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
	}),
	serveStatic("public"),
);
app.listen({ port: 8000 });
