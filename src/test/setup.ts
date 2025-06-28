// tests/setup.ts
import DatabasePort from "../infra/database/database.port";

DatabasePort.connect(false);

beforeAll(async () => {
    await DatabasePort.instance.sync({ force: true });
});

afterAll(async () => {
    await DatabasePort.instance.close();
});
