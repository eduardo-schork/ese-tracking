import { TDeliveryProcessStatusEntity } from "@/domain/entities/delivery-process-status.entity";
import { IDeliveryProcessStatusRepository } from "@/domain/repositories/delivery-process-status-repository.type";
import DeliveryProcessStatusModel from "../models/delivery-process-status.model";

export class DeliveryProcessStatusRepository implements IDeliveryProcessStatusRepository {
    async findAll(): Promise<TDeliveryProcessStatusEntity[]> {
        return await DeliveryProcessStatusModel.findAll({ raw: true });
    }

    async findOne(id: number): Promise<TDeliveryProcessStatusEntity | null> {
        return await DeliveryProcessStatusModel.findByPk(id, { raw: true });
    }

    async create(data: TDeliveryProcessStatusEntity): Promise<TDeliveryProcessStatusEntity> {
        const created = await DeliveryProcessStatusModel.create(data);
        return created.get({ plain: true });
    }

    async update(
        id: number,
        data: Partial<TDeliveryProcessStatusEntity>
    ): Promise<TDeliveryProcessStatusEntity | null> {
        const record = await DeliveryProcessStatusModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TDeliveryProcessStatusEntity;
    }

    async delete(id: number): Promise<void> {
        await DeliveryProcessStatusModel.destroy({ where: { id } });
    }
}
