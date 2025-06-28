import { FleetVehicleFleetRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle-fleet.repository";
import { FleetVehicleRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle.repository";
import { FleetRepository } from "@/infra/database/sequelize/repositories/fleet.repository";

describe("FleetVehicleFleetRepository", () => {
    const repository = new FleetVehicleFleetRepository();
    const fleetRepo = new FleetRepository();
    const vehicleRepo = new FleetVehicleRepository();

    let fleetId: number;
    let fleetVehicleId: number;

    beforeAll(async () => {
        const fleet = await fleetRepo.create({
            name: "Frota de Teste",
            createdAt: new Date(),
            createdBy: "",
        });
        fleetId = fleet.id as number;

        const vehicle = await vehicleRepo.create({
            plate: "XYZ-5678",
            model: "Caminhão Beta",
            cpfDriver: "11122233344",
            renavam: "999888777",
            createdAt: new Date(),
            createdBy: "",
        });
        fleetVehicleId = vehicle.id as number;
    });

    it("should create a new fleet-vehicle-fleet relationship", async () => {
        const relation = await repository.create({
            id: 0, // pode ser ignorado dependendo do auto-incremento
            fleetId,
            fleetVehicleId,
            createdAt: new Date(),
            createdBy: "",
        });

        expect(relation).toHaveProperty("id");
        expect(relation.fleetId).toBe(fleetId);
        expect(relation.fleetVehicleId).toBe(fleetVehicleId);
    });

    it("should find a fleet-vehicle-fleet by id", async () => {
        const created = await repository.create({
            id: 0,
            fleetId,
            fleetVehicleId,
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.fleetId).toBe(fleetId);
        expect(found?.fleetVehicleId).toBe(fleetVehicleId);
    });
});
