import { TBaseEntity } from "./base.entity";

export type TFleetVehicleFleetEntity = {
    id: string;
    fleetVehicleId: string;
    fleetId: string;
} & TBaseEntity;
