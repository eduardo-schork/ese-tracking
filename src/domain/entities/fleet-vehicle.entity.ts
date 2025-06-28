import { TBaseEntity } from "./base.entity";

export type TFleetVehicleEntity = {
    id?: number;
    model: string;
    plate: string;
    cpfDriver: string;
    renavam: string;
} & TBaseEntity;
