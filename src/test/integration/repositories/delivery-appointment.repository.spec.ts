import { AddressRepository } from "@/infra/database/sequelize/repositories/address.repository";
import { DeliveryAppointmentRepository } from "@/infra/database/sequelize/repositories/delivery-appointment.repository";
import { DeliveryProcessStatusRepository } from "@/infra/database/sequelize/repositories/delivery-process-status.repository";
import { DeliveryProcessRepository } from "@/infra/database/sequelize/repositories/delivery-process.repository";
import { FleetVehicleRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle.repository";
import { FleetRepository } from "@/infra/database/sequelize/repositories/fleet.repository";

describe("DeliveryAppointmentRepository", () => {
    const appointmentRepo = new DeliveryAppointmentRepository();
    const addressRepo = new AddressRepository();
    const fleetRepo = new FleetRepository();
    const vehicleRepo = new FleetVehicleRepository();
    const statusRepo = new DeliveryProcessStatusRepository();
    const processRepo = new DeliveryProcessRepository();

    let addressId: number;
    let deliveryProcessId: number;

    beforeAll(async () => {
        const address = await addressRepo.create({
            street: "Rua Teste",
            number: "42",
            neighborhood: "Bairro Teste",
            city: "Cidade Teste",
            state: "SC",
            postalCode: "12345-678",
            createdAt: new Date(),
            createdBy: "",
        });
        addressId = address.id as number;

        const fleet = await fleetRepo.create({
            name: "Frota 1",
            createdAt: new Date(),
            createdBy: "",
        });

        const vehicle = await vehicleRepo.create({
            plate: "ABC-1234",
            model: "Caminhão X",
            cpfDriver: "xyz",
            renavam: "xyz",
            createdAt: new Date(),
            createdBy: "",
        });

        const status = await statusRepo.create({
            name: "Em andamento",
            createdAt: new Date(),
            createdBy: "",
        });

        const process = await processRepo.create({
            fleetId: fleet.id as number,
            fleetVehicleId: vehicle.id as number,
            statusId: status.id as number,
            startedAt: new Date(),
            createdAt: new Date(),
            createdBy: "",
        });

        deliveryProcessId = process.id as number;
    });

    it("should create a new delivery appointment", async () => {
        const appointment = await appointmentRepo.create({
            scheduledTo: new Date("2025-12-01T10:00:00Z"),
            addressId,
            deliveryProcessId,
            createdAt: new Date(),
            createdBy: "",
        });

        expect(appointment).toHaveProperty("id");
        expect(appointment.addressId).toBe(addressId);
        expect(appointment.deliveryProcessId).toBe(deliveryProcessId);
        expect(appointment.scheduledTo.toISOString()).toBe("2025-12-01T10:00:00.000Z");
    });

    it("should find a delivery appointment by id", async () => {
        const created = await appointmentRepo.create({
            scheduledTo: new Date("2025-12-10T14:30:00Z"),
            addressId,
            deliveryProcessId,
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await appointmentRepo.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.addressId).toBe(addressId);
        expect(found?.deliveryProcessId).toBe(deliveryProcessId);
    });
});
