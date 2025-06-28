import { TBaseEntity } from "./base.entity";

export type TDeliveryAppointmentEntity = {
    id?: number;
    scheduledTo: Date;
    deliveryProcessId: number;
    addressId: number;
} & TBaseEntity;
