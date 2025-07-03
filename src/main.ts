import dotenv from "dotenv";
import DatabasePort from "./infra/database/database.port";
import HttpServerPort from "./infra/http-server/http-server.port";

dotenv.config();

const PORT = process.env.PORT || 3001;

async function bootstrap() {
    await DatabasePort.connect(false);
    HttpServerPort.listen(PORT);

    // const deliveryAppointmentRepository = new DeliveryAppointmentRepository();
    // const deliveryProcessRepository = new DeliveryProcessRepository();
    // const useCase = new ProcessDeliveryAppointmentUseCase(
    //     deliveryAppointmentRepository,
    //     deliveryProcessRepository
    // );
    // const queueConsumer = new QueueConsumerPort(useCase);
    // await queueConsumer.start();
}

bootstrap();
