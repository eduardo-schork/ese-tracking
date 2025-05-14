import { TFleetVehicleEntity } from "@/domain/entities/fleet-vehicle.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class FleetVehicleModel extends Model<TFleetVehicleEntity> implements TFleetVehicleEntity {
    id!: string;
    model!: string;
    plate!: string;
    cpfDriver!: string;
    renavam!: string;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineFleetVehicleModel = (sequelize: Sequelize) => {
    FleetVehicleModel.init(
        {
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            model: DataTypes.STRING,
            plate: DataTypes.STRING,
            cpfDriver: DataTypes.STRING,
            renavam: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            createdBy: DataTypes.STRING,
            updatedAt: DataTypes.DATE,
            updatedBy: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            deletedBy: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "FleetVehicle",
            tableName: "fleet_vehicles",
            timestamps: false,
        }
    );

    return FleetVehicleModel;
};

export default FleetVehicleModel;
