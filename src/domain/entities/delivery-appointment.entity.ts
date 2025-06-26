import { TBaseEntity } from "./base.entity";

export type TDeliveryAppointmentEntity = {
    id?: string;
    scheduledTo: Date;
    deliveryProcessId: number;
    addressId: number;
} & TBaseEntity;
