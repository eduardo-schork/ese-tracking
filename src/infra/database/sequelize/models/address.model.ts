import { TAddressEntity } from "@/domain/entities/address.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class AddressModel extends Model<TAddressEntity> implements TAddressEntity {
    id!: number;
    street!: string;
    number!: string;
    complement?: string;
    neighborhood!: string;
    city!: string;
    state!: string;
    postalCode!: string;
    createdAt!: Date;
    createdBy!: string;
    updatedAt?: Date;
    updatedBy?: string;
    deletedAt?: Date;
    deletedBy?: string;
}

export const defineAddressModel = (sequelize: Sequelize) => {
    AddressModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            street: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            complement: DataTypes.STRING,
            neighborhood: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            postalCode: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            createdBy: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            updatedAt: DataTypes.DATE,
            updatedBy: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            deletedBy: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Address",
            tableName: "addresses",
            timestamps: false,
        }
    );

    return AddressModel;
};

export default AddressModel;
