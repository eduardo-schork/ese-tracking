import { TDeliveryAppointmentEntity } from "@/domain/entities/delivery-appointment.entity";
import { IDeliveryAppointmentRepository } from "@/domain/repositories/delivery-appointment-repository.type";

export class ProcessDeliveryAppointmentUseCase {
    constructor(private repository: IDeliveryAppointmentRepository) {}

    async execute(data: TDeliveryAppointmentEntity): Promise<void> {
        console.log("🟢 Processando agendamento:", data);
        await this.repository.create(data);
    }
}
