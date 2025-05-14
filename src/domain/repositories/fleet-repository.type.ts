import { TFleetEntity } from "../entities/fleet.entity";

export interface IFleetRepository {
    findAll(): Promise<TFleetEntity[]>;
    findOne(id: string): Promise<TFleetEntity | null>;
    create(data: TFleetEntity): Promise<TFleetEntity>;
    update(id: string, data: Partial<TFleetEntity>): Promise<TFleetEntity | null>;
    delete(id: string): Promise<void>;
}
