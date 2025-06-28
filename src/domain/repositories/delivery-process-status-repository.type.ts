import { TDeliveryProcessStatusEntity } from "../entities/delivery-process-status.entity";

export interface IDeliveryProcessStatusRepository {
    findAll(): Promise<TDeliveryProcessStatusEntity[]>;
    findOne(id: number): Promise<TDeliveryProcessStatusEntity | null>;
    create(data: TDeliveryProcessStatusEntity): Promise<TDeliveryProcessStatusEntity>;
    update(
        id: number,
        data: Partial<TDeliveryProcessStatusEntity>
    ): Promise<TDeliveryProcessStatusEntity | null>;
    delete(id: number): Promise<void>;
}
