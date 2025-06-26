import { IDeliveryAppointmentRepository } from "@/domain/repositories/delivery-appointment-repository.type";
import { IDeliveryProcessRepository } from "@/domain/repositories/delivery-process-repository.type";

type TDeliveryAppointmentInput = {
    scheduledTo: Date;
    deliveryProcessId: number;
    addressId: number;
    statusId: number;
    createdAt: Date;
    updatedAt: Date;
};

export class ProcessDeliveryAppointmentUseCase {
    constructor(
        private appointmentRepository: IDeliveryAppointmentRepository,
        private deliveryProcessRepository: IDeliveryProcessRepository
    ) {}

    async execute(data: TDeliveryAppointmentInput): Promise<void> {
        console.log(`📥 Starting message processing:`);
        console.log(JSON.stringify(data, null, 2));

        try {
            const updateData: Partial<{ statusId: number; endedAt: Date }> = {
                statusId: data.statusId,
            };

            if (data.statusId === 6) {
                updateData.endedAt = new Date();
            }

            await this.deliveryProcessRepository.update(data.deliveryProcessId, updateData);

            await this.appointmentRepository.create({
                ...data,
                createdBy: "",
            });

            console.log(
                `✅ Message processed successfully for DeliveryProcess ${data.deliveryProcessId}`
            );
        } catch (error: any) {
            console.error(
                `❌ Failed to process message for DeliveryProcess ${data.deliveryProcessId}:`,
                error.message
            );
            throw error;
        }
    }
}
