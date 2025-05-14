import { TBaseEntity } from "./base.entity";

export type TAddressEntity = {
    id: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
} & TBaseEntity;
