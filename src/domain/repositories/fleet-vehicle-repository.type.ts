import { TFleetVehicleEntity } from "../entities/fleet-vehicle.entity";

export interface IFleetVehicleRepository {
    findAll(): Promise<TFleetVehicleEntity[]>;
    findOne(id: string): Promise<TFleetVehicleEntity | null>;
    create(data: TFleetVehicleEntity): Promise<TFleetVehicleEntity>;
    update(id: string, data: Partial<TFleetVehicleEntity>): Promise<TFleetVehicleEntity | null>;
    delete(id: string): Promise<void>;
}
