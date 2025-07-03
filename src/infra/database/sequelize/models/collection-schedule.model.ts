import { TCollectionScheduleEntity } from "@/domain/entities/collection-schedule.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class CollectionScheduleModel
    extends Model<TCollectionScheduleEntity>
    implements TCollectionScheduleEntity
{
    id!: number;
    scheduledTo!: Date;
    addressId!: number;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineCollectionScheduleModel = (sequelize: Sequelize) => {
    CollectionScheduleModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            scheduledTo: DataTypes.DATE,
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
            modelName: "CollectionSchedule",
            tableName: "collection_schedules",
            timestamps: false,
        }
    );

    return CollectionScheduleModel;
};

export default CollectionScheduleModel;
