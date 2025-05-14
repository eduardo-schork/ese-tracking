import { TAddressEntity } from "@/domain/entities/address.entity";
import { DataTypes, Model, Sequelize } from "sequelize";

class AddressModel extends Model<TAddressEntity> implements TAddressEntity {
    id!: string;
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
            id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            complement: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            postalCode: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            createdBy: DataTypes.STRING,
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
