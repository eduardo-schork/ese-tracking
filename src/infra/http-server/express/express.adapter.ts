import express, { Express } from "express";
import router from "./routes/router";

class ExpressAdapter {
    public app: Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
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
