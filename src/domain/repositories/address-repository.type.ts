import { TAddressEntity } from "../entities/address.entity";

export interface IAddressRepository {
    findAll(): Promise<TAddressEntity[]>;
    findOne(id: number): Promise<TAddressEntity | null>;
    create(data: TAddressEntity): Promise<TAddressEntity>;
    update(id: number, data: Partial<TAddressEntity>): Promise<TAddressEntity | null>;
    delete(id: number): Promise<void>;
}
