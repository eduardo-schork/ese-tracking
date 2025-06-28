import { AddressRepository } from "@/infra/database/sequelize/repositories/address.repository";

describe("AddressRepository", () => {
    const repository = new AddressRepository();

    it("should create a new address", async () => {
        const address = await repository.create({
            street: "Rua das Flores",
            number: "123",
            complement: "Apto 202",
            neighborhood: "Centro",
            city: "Florianópolis",
            state: "SC",
            postalCode: "88000-000",
            createdAt: new Date(),
            createdBy: "",
        });

        expect(address).toHaveProperty("id");
        expect(address.street).toBe("Rua das Flores");
        expect(address.number).toBe("123");
        expect(address.complement).toBe("Apto 202");
        expect(address.neighborhood).toBe("Centro");
        expect(address.city).toBe("Florianópolis");
        expect(address.state).toBe("SC");
        expect(address.postalCode).toBe("88000-000");
    });

    it("should find an address by id", async () => {
        const created = await repository.create({
            street: "Rua das Palmeiras",
            number: "456",
            neighborhood: "Trindade",
            city: "Joinville",
            state: "SC",
            postalCode: "89000-000",
            createdAt: new Date(),
            createdBy: "",
        });

        const found = await repository.findOne(created.id as number);

        expect(found).not.toBeNull();
        expect(found?.id).toBe(created.id);
        expect(found?.street).toBe("Rua das Palmeiras");
        expect(found?.number).toBe("456");
        expect(found?.neighborhood).toBe("Trindade");
    });
});
