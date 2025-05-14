import { TCollectionScheduleEntity } from "@/domain/entities/collection-schedule.entity";
import { ICollectionScheduleRepository } from "@/domain/repositories/collection-schedule-repository.type";
import CollectionScheduleModel from "../models/collection-schedule.model";

export class CollectionScheduleRepository implements ICollectionScheduleRepository {
    async findAll(): Promise<TCollectionScheduleEntity[]> {
        return await CollectionScheduleModel.findAll({ raw: true });
    }

    async findOne(id: string): Promise<TCollectionScheduleEntity | null> {
        return await CollectionScheduleModel.findByPk(id, { raw: true });
    }

    async create(data: TCollectionScheduleEntity): Promise<TCollectionScheduleEntity> {
        const created = await CollectionScheduleModel.create(data);
        return created.get({ plain: true });
    }

    async update(
        id: string,
        data: Partial<TCollectionScheduleEntity>
    ): Promise<TCollectionScheduleEntity | null> {
        const record = await CollectionScheduleModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TCollectionScheduleEntity;
    }

    async delete(id: string): Promise<void> {
        await CollectionScheduleModel.destroy({ where: { id } });
    }
}
