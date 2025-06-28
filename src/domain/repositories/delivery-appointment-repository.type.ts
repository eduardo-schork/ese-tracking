import { TDeliveryAppointmentEntity } from "../entities/delivery-appointment.entity";

export interface IDeliveryAppointmentRepository {
    findAll(): Promise<TDeliveryAppointmentEntity[]>;
    findOne(id: number): Promise<TDeliveryAppointmentEntity | null>;
    create(data: TDeliveryAppointmentEntity): Promise<TDeliveryAppointmentEntity>;
    update(
        id: number,
        data: Partial<TDeliveryAppointmentEntity>
    ): Promise<TDeliveryAppointmentEntity | null>;
    delete(id: number): Promise<void>;
}
