import { TFleetVehicleFleetEntity } from "@/domain/entities/fleet-vehicle-fleet.entity";
import { IFleetVehicleFleetRepository } from "@/domain/repositories/fleet-vehicle-fleet-repository.type";
import FleetVehicleFleetModel from "../models/fleet-vehicle-fleet.model";

export class FleetVehicleFleetRepository implements IFleetVehicleFleetRepository {
    async findAll(): Promise<TFleetVehicleFleetEntity[]> {
        return await FleetVehicleFleetModel.findAll({ raw: true });
    }

    async findOne(id: string): Promise<TFleetVehicleFleetEntity | null> {
        return await FleetVehicleFleetModel.findByPk(id, { raw: true });
    }

    async create(data: TFleetVehicleFleetEntity): Promise<TFleetVehicleFleetEntity> {
        const created = await FleetVehicleFleetModel.create(data);
        return created.get({ plain: true });
    }

    async update(
        id: string,
        data: Partial<TFleetVehicleFleetEntity>
    ): Promise<TFleetVehicleFleetEntity | null> {
        const record = await FleetVehicleFleetModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TFleetVehicleFleetEntity;
    }

    async delete(id: string): Promise<void> {
        await FleetVehicleFleetModel.destroy({ where: { id } });
    }
}
