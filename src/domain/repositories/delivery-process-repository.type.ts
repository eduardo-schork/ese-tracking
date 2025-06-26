import { TDeliveryProcessEntity } from "../entities/delivery-process.entity";

export interface IDeliveryProcessRepository {
    findAll(): Promise<TDeliveryProcessEntity[]>;
    findOne(id: number): Promise<TDeliveryProcessEntity | null>;
    create(data: TDeliveryProcessEntity): Promise<TDeliveryProcessEntity>;
    update(
        id: number,
        data: Partial<TDeliveryProcessEntity>
    ): Promise<TDeliveryProcessEntity | null>;
    delete(id: number): Promise<void>;
}
