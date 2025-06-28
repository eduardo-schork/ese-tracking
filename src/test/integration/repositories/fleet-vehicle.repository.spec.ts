import { FleetVehicleRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle.repository";

describe("FleetVehicleRepository", () => {
    const repository = new FleetVehicleRepository();

    it("should create a new fleet vehicle", async () => {
        const vehicle = await repository.create({
            model: "Caminhão Alpha",
            plate: "ABC-1234",
            cpfDriver: "12345678900",
            renavam: "987654321",
            createdAt: new Date(),
            createdBy: "",
        });

        expect(vehicle).toHaveProperty("id");
        expect(vehicle.model).toBe("Caminhão Alpha");
        expect(vehicle.plate).toBe("ABC-1234");
        expect(vehicle.cpfDriver).toBe("12345678900");
        expect(vehicle.renavam).toBe("987654321");
    });

    it("should find a fleet vehicle by id", async () => {
        const created = await repository.create({
            model: "Caminhão Beta",
            plate: "XYZ-5678",
            cpfDriver: "98765432100",
            renavam: "123456789",
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.model).toBe("Caminhão Beta");
        expect(found?.plate).toBe("XYZ-5678");
    });
});
