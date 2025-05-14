import { ProcessDeliveryAppointmentUseCase } from "@/application/usecase/process-delivery-appointment.usecase";
import amqplib from "amqplib";
import { IQueueConsumer } from "./queue-consumer.port";

export class RabbitMQConsumerAdapter implements IQueueConsumer {
    private readonly queueName = process.env.QUEUE_NAME || "";
    private readonly rabbitUrl = process.env.RABBITMQ_URL || "";

    constructor(private readonly useCase: ProcessDeliveryAppointmentUseCase) {}

    async start(): Promise<void> {
        const connection = await amqplib.connect(this.rabbitUrl);
        const channel = await connection.createChannel();
        await channel.assertQueue(this.queueName, { durable: true });

        console.log(`🟡 Consumindo fila: ${this.queueName}`);

        channel.consume(
            this.queueName,
            async (msg) => {
                if (!msg) return;

                try {
                    const content = JSON.parse(msg.content.toString());
                    await this.useCase.execute(content);
                    channel.ack(msg);
                } catch (error) {
                    console.error("❌ Erro ao processar mensagem:", error);
                    channel.nack(msg, false, false); // não reencaminha
                }
            },
            { noAck: false }
        );
    }
}
