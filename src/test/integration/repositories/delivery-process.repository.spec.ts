import { DeliveryProcessStatusRepository } from "@/infra/database/sequelize/repositories/delivery-process-status.repository";
import { DeliveryProcessRepository } from "@/infra/database/sequelize/repositories/delivery-process.repository";
import { FleetVehicleRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle.repository";
import { FleetRepository } from "@/infra/database/sequelize/repositories/fleet.repository";

describe("DeliveryProcessRepository", () => {
    const repository = new DeliveryProcessRepository();
    const fleetRepo = new FleetRepository();
    const vehicleRepo = new FleetVehicleRepository();
    const statusRepo = new DeliveryProcessStatusRepository();

    let fleetId: number;
    let fleetVehicleId: number;
    let statusId: number;

    beforeAll(async () => {
        const fleet = await fleetRepo.create({
            name: "Frota Teste",
            createdAt: new Date(),
            createdBy: "",
        });
        fleetId = fleet.id as number;

        const vehicle = await vehicleRepo.create({
            plate: "XYZ-0001",
            model: "Caminhão Teste",
            cpfDriver: "12345678900",
            renavam: "987654321",
            createdAt: new Date(),
            createdBy: "",
        });
        fleetVehicleId = vehicle.id as number;

        const status = await statusRepo.create({
            name: "Em andamento",
            createdAt: new Date(),
            createdBy: "",
        });
        statusId = status.id as number;
    });

    it("should create a new delivery process", async () => {
        const process = await repository.create({
            fleetId,
            fleetVehicleId,
            statusId,
            startedAt: new Date("2025-11-01T08:00:00Z"),
            createdAt: new Date(),
            createdBy: "",
        });

        expect(process).toHaveProperty("id");
        expect(process.fleetId).toBe(fleetId);
        expect(process.fleetVehicleId).toBe(fleetVehicleId);
        expect(process.statusId).toBe(statusId);
        expect(process.startedAt.toISOString()).toBe("2025-11-01T08:00:00.000Z");
    });

    it("should find a delivery process by id", async () => {
        const created = await repository.create({
            fleetId,
            fleetVehicleId,
            statusId,
            startedAt: new Date("2025-11-15T09:00:00Z"),
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.fleetId).toBe(fleetId);
        expect(found?.fleetVehicleId).toBe(fleetVehicleId);
        expect(found?.statusId).toBe(statusId);
    });
});
