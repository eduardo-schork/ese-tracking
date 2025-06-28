import { FleetRepository } from "@/infra/database/sequelize/repositories/fleet.repository";

describe("FleetRepository", () => {
    const repository = new FleetRepository();

    it("should create a new fleet", async () => {
        const fleet = await repository.create({
            name: "Frota Central",
            createdAt: new Date(),
            createdBy: "",
        });

        expect(fleet).toHaveProperty("id");
        expect(fleet.name).toBe("Frota Central");
    });

    it("should find a fleet by id", async () => {
        const created = await repository.create({
            name: "Frota Norte",
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.name).toBe("Frota Norte");
    });
});
