import dotenv from "dotenv";
import { ProcessDeliveryAppointmentUseCase } from "./application/usecase/process-delivery-appointment.usecase";
import DatabasePort from "./infra/database/database.port";
import { DeliveryAppointmentRepository } from "./infra/database/sequelize/repositories/delivery-appointment.repository";
import { DeliveryProcessRepository } from "./infra/database/sequelize/repositories/delivery-process.repository";
import HttpServerPort from "./infra/http-server/http-server.port";
import QueueConsumerPort from "./infra/queue-consumer/queue-consumer.port";

dotenv.config();

const PORT = process.env.PORT || 3001;

async function bootstrap() {
    await DatabasePort.connect(false);

    HttpServerPort.listen(PORT);

    const deliveryAppointmentRepository = new DeliveryAppointmentRepository();
    const deliveryProcessRepository = new DeliveryProcessRepository();
    const useCase = new ProcessDeliveryAppointmentUseCase(
        deliveryAppointmentRepository,
        deliveryProcessRepository
    );
    const queueConsumer = new QueueConsumerPort(useCase);
    await queueConsumer.start();
}

bootstrap();
