import dotenv from "dotenv";
import { ProcessDeliveryAppointmentUseCase } from "./application/usecase/process-delivery-appointment.usecase";
import DatabasePort from "./infra/database/database.port";
import { DeliveryAppointmentRepository } from "./infra/database/sequelize/repositories/delivery-appointment.repository";
import HttpServerPort from "./infra/http-server/http-server.port";
import { RabbitMQConsumerAdapter } from "./infra/queue-consumer/rabbitmq-adapter";

dotenv.config();

const PORT = process.env.PORT || 3001;

async function bootstrap() {
    await DatabasePort.connect(false);

    HttpServerPort.listen(PORT);

    const repository = new DeliveryAppointmentRepository();
    const useCase = new ProcessDeliveryAppointmentUseCase(repository);
    const queueConsumer = new RabbitMQConsumerAdapter(useCase);
    await queueConsumer.start();
}

bootstrap();
