import { TDeliveryProcessEntity } from "@/domain/entities/delivery-process.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class DeliveryProcessModel extends Model<TDeliveryProcessEntity> implements TDeliveryProcessEntity {
    id!: string;
    fleetId!: string;
    fleetVehicleId!: string;
    statusId!: string;
    startedAt!: Date;
    endedAt?: Date;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineDeliveryProcessModel = (sequelize: Sequelize) => {
    DeliveryProcessModel.init(
        {
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            fleetId: DataTypes.UUID,
            fleetVehicleId: DataTypes.UUID,
            statusId: DataTypes.UUID,
            startedAt: DataTypes.DATE,
            endedAt: DataTypes.DATE,
            createdAt: DataTypes.DATE,
            createdBy: DataTypes.STRING,
            updatedAt: DataTypes.DATE,
            updatedBy: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            deletedBy: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "DeliveryProcess",
            tableName: "delivery_processes",
            timestamps: false,
        }
    );

    return DeliveryProcessModel;
};

export default DeliveryProcessModel;
