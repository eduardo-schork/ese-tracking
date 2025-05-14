import { TBaseEntity } from "./base.entity";

export type TDeliveryProcessEntity = {
    id: string;
    fleetId: string;
    fleetVehicleId: string;
    statusId: string;
    startedAt: Date;
    endedAt?: Date;
} & TBaseEntity;
