import { TBaseEntity } from "./base.entity";
import { TFleetVehicleEntity } from "./fleet-vehicle.entity";

export type TFleetEntity = {
    id: string;
    name: string;
    vehicles?: TFleetVehicleEntity[];
} & TBaseEntity;
