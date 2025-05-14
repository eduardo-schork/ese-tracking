import { TFleetVehicleFleetEntity } from "../entities/fleet-vehicle-fleet.entity";

export interface IFleetVehicleFleetRepository {
    findAll(): Promise<TFleetVehicleFleetEntity[]>;
    findOne(id: string): Promise<TFleetVehicleFleetEntity | null>;
    create(data: TFleetVehicleFleetEntity): Promise<TFleetVehicleFleetEntity>;
    update(
        id: string,
        data: Partial<TFleetVehicleFleetEntity>
    ): Promise<TFleetVehicleFleetEntity | null>;
    delete(id: string): Promise<void>;
}
