import { TAddressEntity } from "../entities/address.entity";

export interface IAddressRepository {
    findAll(): Promise<TAddressEntity[]>;
    findOne(id: string): Promise<TAddressEntity | null>;
    create(data: TAddressEntity): Promise<TAddressEntity>;
    update(id: string, data: Partial<TAddressEntity>): Promise<TAddressEntity | null>;
    delete(id: string): Promise<void>;
}
