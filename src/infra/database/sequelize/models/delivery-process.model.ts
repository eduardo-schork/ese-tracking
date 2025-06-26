import { TDeliveryProcessEntity } from "@/domain/entities/delivery-process.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class DeliveryProcessModel extends Model<TDeliveryProcessEntity> implements TDeliveryProcessEntity {
    id!: number;
    fleetId!: number;
    fleetVehicleId!: number;
    statusId!: number;
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
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fleetId: DataTypes.INTEGER,
            fleetVehicleId: DataTypes.INTEGER,
            statusId: DataTypes.INTEGER,
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
