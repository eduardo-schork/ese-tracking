import { TBaseEntity } from "./base.entity";

export type TCollectionScheduleEntity = {
    id?: number;
    scheduledTo: Date;
    addressId: number;
} & TBaseEntity;
