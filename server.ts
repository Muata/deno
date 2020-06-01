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
    origin: /twitch\.tv$/,
    methods: ["GET", "HEAD"],
  }),
  serveStatic("public"),
);
const www = createRouter();
// allow all access to /api routes
www.use(cors({
  origin: "*",
  methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["x-my-api-token"],
  maxAge: 300,
}));
app.route("/public", www);
app.listen({ port: 8000 });
