import { TBaseEntity } from "./base.entity";

export type TFleetVehicleFleetEntity = {
    id?: number;
    fleetVehicleId: number;
    fleetId: number;
} & TBaseEntity;
