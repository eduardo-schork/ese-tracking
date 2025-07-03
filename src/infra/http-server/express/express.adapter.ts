import express, { Express } from "express";
import router from "./routes/router";
import swaggerUi from "swagger-ui-express";
import path from "path";
import YAML from "yamljs";

class ExpressAdapter {
    public app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        const isDevelopment = process.env.NODE_ENV === "development";
        if (isDevelopment) {
            const specPath = path.resolve(
                __dirname,
                "../../../../docs/openapi.yaml"
            );
            const openApiDocument = YAML.load(specPath);
            this.app.use(
                "/api-docs",
                swaggerUi.serve,
                swaggerUi.setup(openApiDocument)
            );
        }
        this.app.use("/api", router);

        this.app.get("/health", (_, res) => res.send("✅ Tracking service is running"));
    }

    listen(port: number | string) {
        this.app.listen(port, () => {
            console.log(`🚀 HTTP Server listening on port ${port}`);
        });
    }
}

export default new ExpressAdapter();
