import { AddressRepository } from "@/infra/database/sequelize/repositories/address.repository";
import { CollectionScheduleRepository } from "@/infra/database/sequelize/repositories/collection-schedule.repository";

describe("CollectionScheduleRepository", () => {
    const repository = new CollectionScheduleRepository();
    const addressRepository = new AddressRepository();

    let addressId: number;

    beforeAll(async () => {
        const address = await addressRepository.create({
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
    });

    it("should create a new collection schedule", async () => {
        const collection = await repository.create({
            scheduledTo: new Date("2025-12-01T10:00:00Z"),
            addressId,
            createdAt: new Date(),
            createdBy: "",
        });

        expect(collection).toHaveProperty("id");
        expect(collection.addressId).toBe(addressId);
        expect(collection.scheduledTo.toISOString()).toBe("2025-12-01T10:00:00.000Z");
    });

    it("should find a collection schedule by id", async () => {
        const created = await repository.create({
            scheduledTo: new Date("2025-12-10T14:30:00Z"),
            addressId,
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.addressId).toBe(addressId);
    });
});
