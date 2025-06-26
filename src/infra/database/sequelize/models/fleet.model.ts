import { TFleetEntity } from "@/domain/entities/fleet.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class FleetModel extends Model<TFleetEntity> implements TFleetEntity {
    id!: string;
    name!: string;
    vehicles?: any;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineFleetModel = (sequelize: Sequelize) => {
    FleetModel.init(
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
            modelName: "Fleet",
            tableName: "fleets",
            timestamps: false,
        }
    );

    return FleetModel;
};

export default FleetModel;
