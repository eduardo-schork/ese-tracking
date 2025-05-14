import { TDeliveryProcessEntity } from "../entities/delivery-process.entity";

export interface IDeliveryProcessRepository {
    findAll(): Promise<TDeliveryProcessEntity[]>;
    findOne(id: string): Promise<TDeliveryProcessEntity | null>;
    create(data: TDeliveryProcessEntity): Promise<TDeliveryProcessEntity>;
    update(
        id: string,
        data: Partial<TDeliveryProcessEntity>
    ): Promise<TDeliveryProcessEntity | null>;
    delete(id: string): Promise<void>;
}
