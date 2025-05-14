import { TCollectionScheduleEntity } from "@/domain/entities/collection-schedule.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class CollectionScheduleModel
    extends Model<TCollectionScheduleEntity>
    implements TCollectionScheduleEntity
{
    id!: string;
    scheduledTo!: Date;
    addressId!: string;
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
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            scheduledTo: DataTypes.DATE,
            addressId: DataTypes.UUID,
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
