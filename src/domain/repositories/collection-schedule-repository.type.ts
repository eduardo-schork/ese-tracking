import { TCollectionScheduleEntity } from "../entities/collection-schedule.entity";

export interface ICollectionScheduleRepository {
    findAll(): Promise<TCollectionScheduleEntity[]>;
    findOne(id: number): Promise<TCollectionScheduleEntity | null>;
    create(data: TCollectionScheduleEntity): Promise<TCollectionScheduleEntity>;
    update(
        id: number,
        data: Partial<TCollectionScheduleEntity>
    ): Promise<TCollectionScheduleEntity | null>;
    delete(id: number): Promise<void>;
}
