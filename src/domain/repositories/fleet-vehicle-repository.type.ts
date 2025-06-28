import { TFleetVehicleEntity } from "../entities/fleet-vehicle.entity";

export interface IFleetVehicleRepository {
    findAll(): Promise<TFleetVehicleEntity[]>;
    findOne(id: number): Promise<TFleetVehicleEntity | null>;
    create(data: TFleetVehicleEntity): Promise<TFleetVehicleEntity>;
    update(id: number, data: Partial<TFleetVehicleEntity>): Promise<TFleetVehicleEntity | null>;
    delete(id: number): Promise<void>;
}
