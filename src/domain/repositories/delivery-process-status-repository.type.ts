import { TDeliveryProcessStatusEntity } from "../entities/delivery-process-status.entity";

export interface IDeliveryProcessStatusRepository {
    findAll(): Promise<TDeliveryProcessStatusEntity[]>;
    findOne(id: string): Promise<TDeliveryProcessStatusEntity | null>;
    create(data: TDeliveryProcessStatusEntity): Promise<TDeliveryProcessStatusEntity>;
    update(
        id: string,
        data: Partial<TDeliveryProcessStatusEntity>
    ): Promise<TDeliveryProcessStatusEntity | null>;
    delete(id: string): Promise<void>;
}
