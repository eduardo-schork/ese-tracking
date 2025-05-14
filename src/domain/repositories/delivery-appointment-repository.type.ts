import { TDeliveryAppointmentEntity } from "../entities/delivery-appointment.entity";

export interface IDeliveryAppointmentRepository {
    findAll(): Promise<TDeliveryAppointmentEntity[]>;
    findOne(id: string): Promise<TDeliveryAppointmentEntity | null>;
    create(data: TDeliveryAppointmentEntity): Promise<TDeliveryAppointmentEntity>;
    update(
        id: string,
        data: Partial<TDeliveryAppointmentEntity>
    ): Promise<TDeliveryAppointmentEntity | null>;
    delete(id: string): Promise<void>;
}
