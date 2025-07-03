import { TDeliveryAppointmentEntity } from "@/domain/entities/delivery-appointment.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class DeliveryAppointmentModel
    extends Model<TDeliveryAppointmentEntity>
    implements TDeliveryAppointmentEntity
{
    id!: number;
    scheduledTo!: Date;
    deliveryProcessId!: number;
    addressId!: number;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineDeliveryAppointmentModel = (sequelize: Sequelize) => {
    DeliveryAppointmentModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            scheduledTo: DataTypes.DATE,
            deliveryProcessId: DataTypes.INTEGER,
            addressId: DataTypes.INTEGER,
            createdAt: DataTypes.DATE,
            createdBy: DataTypes.STRING,
            updatedAt: DataTypes.DATE,
            updatedBy: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            deletedBy: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "DeliveryAppointment",
            tableName: "delivery_appointments",
            timestamps: false,
        }
    );

    return DeliveryAppointmentModel;
};

export default DeliveryAppointmentModel;
