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
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            fleetVehicleId: DataTypes.UUID,
            fleetId: DataTypes.UUID,
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
