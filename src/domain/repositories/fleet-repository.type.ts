import { TFleetEntity } from "../entities/fleet.entity";

export interface IFleetRepository {
    findAll(): Promise<TFleetEntity[]>;
    findOne(id: number): Promise<TFleetEntity | null>;
    create(data: TFleetEntity): Promise<TFleetEntity>;
    update(id: number, data: Partial<TFleetEntity>): Promise<TFleetEntity | null>;
    delete(id: number): Promise<void>;
}
