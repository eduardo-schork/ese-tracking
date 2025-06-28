import { DeliveryProcessStatusRepository } from "@/infra/database/sequelize/repositories/delivery-process-status.repository";

describe("DeliveryProcessStatusRepository", () => {
    const repository = new DeliveryProcessStatusRepository();

    it("should create a new delivery process status", async () => {
        const status = await repository.create({
            name: "Em andamento",
            createdAt: new Date(),
            createdBy: "",
        });

        expect(status).toHaveProperty("id");
        expect(status.name).toBe("Em andamento");
    });

    it("should find a delivery process status by id", async () => {
        const created = await repository.create({
            name: "Finalizado",
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.name).toBe("Finalizado");
    });
});
