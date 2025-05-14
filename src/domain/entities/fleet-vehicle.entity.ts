import { TBaseEntity } from "./base.entity";

export type TFleetVehicleEntity = {
    id: string;
    model: string;
    plate: string;
    cpfDriver: string;
    renavam: string;
} & TBaseEntity;
