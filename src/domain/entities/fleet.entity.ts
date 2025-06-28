import { TBaseEntity } from "./base.entity";
import { TFleetVehicleEntity } from "./fleet-vehicle.entity";

export type TFleetEntity = {
    id?: number;
    name: string;
    vehicles?: TFleetVehicleEntity[];
} & TBaseEntity;
