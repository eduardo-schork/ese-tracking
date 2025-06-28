import { TDeliveryProcessStatusEntity } from "@/domain/entities/delivery-process-status.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class DeliveryProcessStatusModel
    extends Model<TDeliveryProcessStatusEntity>
    implements TDeliveryProcessStatusEntity
{
    id!: number;
    name!: string;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineDeliveryProcessStatusModel = (sequelize: Sequelize) => {
    DeliveryProcessStatusModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            createdBy: DataTypes.STRING,
            updatedAt: DataTypes.DATE,
            updatedBy: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            deletedBy: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "DeliveryProcessStatus",
            tableName: "delivery_process_statuses",
            timestamps: false,
        }
    );

    return DeliveryProcessStatusModel;
};

export default DeliveryProcessStatusModel;
