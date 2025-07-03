import { IDeliveryAppointmentRepository } from "@/domain/repositories/delivery-appointment-repository.type";
import { IDeliveryProcessRepository } from "@/domain/repositories/delivery-process-repository.type";
import { ProcessDeliveryAppointmentUseCase } from "../../../application/usecase/process-delivery-appointment.usecase";

describe("ProcessDeliveryAppointmentUseCase", () => {
    const mockAppointmentRepo: jest.Mocked<IDeliveryAppointmentRepository> = {
        create: jest.fn(),
        findOne: jest.fn(),
        findAll: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    };

    const mockProcessRepo: jest.Mocked<IDeliveryProcessRepository> = {
        create: jest.fn(),
        findOne: jest.fn(),
        findAll: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
    };

    const useCase = new ProcessDeliveryAppointmentUseCase(mockAppointmentRepo, mockProcessRepo);

    it("should update the delivery process when status is 6 (finalizado)", async () => {
        const input = {
            scheduledTo: new Date(),
            deliveryProcessId: 1,
            addressId: 2,
            statusId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await useCase.execute(input);

        expect(mockProcessRepo.update).toHaveBeenCalledWith(
            1,
            expect.objectContaining({
                statusId: 6,
                endedAt: expect.any(Date),
            })
        );
    });

    it("should update the delivery process with only status when status is not 6", async () => {
        const input = {
            scheduledTo: new Date(),
            deliveryProcessId: 1,
            addressId: 2,
            statusId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        await useCase.execute(input);

        expect(mockProcessRepo.update).toHaveBeenCalledWith(1, {
            statusId: 3,
        });
    });
});
