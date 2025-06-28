import { TFleetEntity } from "@/domain/entities/fleet.entity";
import { IFleetRepository } from "@/domain/repositories/fleet-repository.type";
import FleetModel from "../models/fleet.model";

export class FleetRepository implements IFleetRepository {
    async findAll(): Promise<TFleetEntity[]> {
        return await FleetModel.findAll({ raw: true });
    }

    async findOne(id: number): Promise<TFleetEntity | null> {
        return await FleetModel.findByPk(id, { raw: true });
    }

    async create(data: TFleetEntity): Promise<TFleetEntity> {
        const created = await FleetModel.create(data);
        return created.get({ plain: true });
    }

    async update(id: number, data: Partial<TFleetEntity>): Promise<TFleetEntity | null> {
        const record = await FleetModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TFleetEntity;
    }

    async delete(id: number): Promise<void> {
        await FleetModel.destroy({ where: { id } });
    }
}
