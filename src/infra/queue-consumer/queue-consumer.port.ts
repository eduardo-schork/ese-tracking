import { RabbitMQConsumerAdapter } from "./rabbitmq-adapter";

export interface IQueueConsumer {
    start(): Promise<void>;
}

const QueueConsumerPort = RabbitMQConsumerAdapter;

export default QueueConsumerPort;
