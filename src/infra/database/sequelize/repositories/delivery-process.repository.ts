import { TDeliveryProcessEntity } from "@/domain/entities/delivery-process.entity";
import { IDeliveryProcessRepository } from "@/domain/repositories/delivery-process-repository.type";
import DeliveryProcessModel from "../models/delivery-process.model";

export class DeliveryProcessRepository implements IDeliveryProcessRepository {
    async findAll(): Promise<TDeliveryProcessEntity[]> {
        return await DeliveryProcessModel.findAll({ raw: true });
    }

    async findOne(id: string): Promise<TDeliveryProcessEntity | null> {
        return await DeliveryProcessModel.findByPk(id, { raw: true });
    }

    async create(data: TDeliveryProcessEntity): Promise<TDeliveryProcessEntity> {
        const created = await DeliveryProcessModel.create(data);
        return created.get({ plain: true });
    }

    async update(
        id: string,
        data: Partial<TDeliveryProcessEntity>
    ): Promise<TDeliveryProcessEntity | null> {
        const record = await DeliveryProcessModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TDeliveryProcessEntity;
    }

    async delete(id: string): Promise<void> {
        await DeliveryProcessModel.destroy({ where: { id } });
    }
}
