import { TCollectionScheduleEntity } from "../entities/collection-schedule.entity";

export interface ICollectionScheduleRepository {
    findAll(): Promise<TCollectionScheduleEntity[]>;
    findOne(id: string): Promise<TCollectionScheduleEntity | null>;
    create(data: TCollectionScheduleEntity): Promise<TCollectionScheduleEntity>;
    update(
        id: string,
        data: Partial<TCollectionScheduleEntity>
    ): Promise<TCollectionScheduleEntity | null>;
    delete(id: string): Promise<void>;
}
