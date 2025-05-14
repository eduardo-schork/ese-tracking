import { TBaseEntity } from "./base.entity";

export type TCollectionScheduleEntity = {
    id: string;
    scheduledTo: Date;
    addressId: string;
} & TBaseEntity;
