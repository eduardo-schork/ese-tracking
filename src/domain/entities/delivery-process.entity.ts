import { TBaseEntity } from "./base.entity";

export type TDeliveryProcessEntity = {
    id: number;
    fleetId: number;
    fleetVehicleId: number;
    statusId: number;
    startedAt: Date;
    endedAt?: Date;
} & TBaseEntity;
