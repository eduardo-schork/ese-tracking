import { TDeliveryAppointmentEntity } from "@/domain/entities/delivery-appointment.entity";
import { IDeliveryAppointmentRepository } from "@/domain/repositories/delivery-appointment-repository.type";
import DeliveryAppointmentModel from "../models/delivery-appointment.model";

export class DeliveryAppointmentRepository implements IDeliveryAppointmentRepository {
    async findAll(): Promise<TDeliveryAppointmentEntity[]> {
        return await DeliveryAppointmentModel.findAll({ raw: true });
    }

    async findOne(id: string): Promise<TDeliveryAppointmentEntity | null> {
        return await DeliveryAppointmentModel.findByPk(id, { raw: true });
    }

    async create(data: TDeliveryAppointmentEntity): Promise<TDeliveryAppointmentEntity> {
        const created = await DeliveryAppointmentModel.create(data);
        return created.get({ plain: true });
    }

    async update(
        id: string,
        data: Partial<TDeliveryAppointmentEntity>
    ): Promise<TDeliveryAppointmentEntity | null> {
        const record = await DeliveryAppointmentModel.findByPk(id);
        if (!record) return null;
        await record.update(data);
        return record.get({ plain: true }) as TDeliveryAppointmentEntity;
    }

    async delete(id: string): Promise<void> {
        await DeliveryAppointmentModel.destroy({ where: { id } });
    }
}
