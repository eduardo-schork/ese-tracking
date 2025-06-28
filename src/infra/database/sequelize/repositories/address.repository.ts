import { TAddressEntity } from "@/domain/entities/address.entity";
import { IAddressRepository } from "@/domain/repositories/address-repository.type";
import AddressModel from "../models/address.model";

export class AddressRepository implements IAddressRepository {
    async findAll(): Promise<TAddressEntity[]> {
        return await AddressModel.findAll({ raw: true });
    }

    async findOne(id: number): Promise<TAddressEntity | null> {
        return await AddressModel.findByPk(id, { raw: true });
    }

    async create(data: TAddressEntity): Promise<TAddressEntity> {
        const created = await AddressModel.create(data);
        return created.get({ plain: true });
    }

    async update(id: number, data: Partial<TAddressEntity>): Promise<TAddressEntity | null> {
        const address = await AddressModel.findByPk(id);
        if (!address) return null;

        await address.update(data);
        return address.get({ plain: true }) as TAddressEntity;
    }

    async delete(id: number): Promise<void> {
        await AddressModel.destroy({ where: { id } });
    }
}
