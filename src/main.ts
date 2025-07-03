import dotenv from "dotenv";
import DatabasePort from "./infra/database/database.port";
import HttpServerPort from "./infra/http-server/http-server.port";

dotenv.config();

const PORT = process.env.PORT || 3001;

async function bootstrap() {
    await DatabasePort.connect(false);
    HttpServerPort.listen(PORT);
}

bootstrap();
