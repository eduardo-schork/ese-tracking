import { TFleetVehicleFleetEntity } from "../entities/fleet-vehicle-fleet.entity";

export interface IFleetVehicleFleetRepository {
    findAll(): Promise<TFleetVehicleFleetEntity[]>;
    findOne(id: number): Promise<TFleetVehicleFleetEntity | null>;
    create(data: TFleetVehicleFleetEntity): Promise<TFleetVehicleFleetEntity>;
    update(
        id: number,
        data: Partial<TFleetVehicleFleetEntity>
    ): Promise<TFleetVehicleFleetEntity | null>;
    delete(id: number): Promise<void>;
}
