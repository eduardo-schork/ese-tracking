import { TFleetVehicleEntity } from "@/domain/entities/fleet-vehicle.entity";
import { IFleetVehicleRepository } from "@/domain/repositories/fleet-vehicle-repository.type";
import FleetVehicleModel from "../models/fleet-vehicle.model";

export class FleetVehicleRepository implements IFleetVehicleRepository {
    async findAll(): Promise<TFleetVehicleEntity[]> {
        return await FleetVehicleModel.findAll({ raw: true });
    }

    async findOne(id: number): Promise<TFleetVehicleEntity | null> {
        return await FleetVehicleModel.findByPk(id, { raw: true });
    }

    async create(data: TFleetVehicleEntity): Promise<TFleetVehicleEntity> {
        const created = await FleetVehicleModel.create(data);
        return created.get({ plain: true });
    }

    async update(
        id: number,
        data: Partial<TFleetVehicleEntity>
    ): Promise<TFleetVehicleEntity | null> {
        const record = await FleetVehicleModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TFleetVehicleEntity;
    }

    async delete(id: number): Promise<void> {
        await FleetVehicleModel.destroy({ where: { id } });
    }
}
