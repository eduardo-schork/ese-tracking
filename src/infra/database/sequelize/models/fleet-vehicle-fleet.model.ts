import { TFleetVehicleFleetEntity } from "@/domain/entities/fleet-vehicle-fleet.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class FleetVehicleFleetModel
    extends Model<TFleetVehicleFleetEntity>
    implements TFleetVehicleFleetEntity
{
    id!: string;
    fleetVehicleId!: string;
    fleetId!: string;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineFleetVehicleFleetModel = (sequelize: Sequelize) => {
    FleetVehicleFleetModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            fleetVehicleId: DataTypes.INTEGER,
            fleetId: DataTypes.INTEGER,
            createdAt: DataTypes.DATE,
            createdBy: DataTypes.STRING,
            updatedAt: DataTypes.DATE,
            updatedBy: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            deletedBy: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "FleetVehicleFleet",
            tableName: "fleet_vehicle_fleet",
            timestamps: false,
        }
    );

    return FleetVehicleFleetModel;
};

export default FleetVehicleFleetModel;
