import * as dotenv from "dotenv";
import { Sequelize } from "sequelize";

import { defineAddressModel } from "./models/address.model";
import { defineCollectionScheduleModel } from "./models/collection-schedule.model";
import { defineDeliveryAppointmentModel } from "./models/delivery-appointment.model";
import { defineDeliveryProcessStatusModel } from "./models/delivery-process-status.model";
import { defineDeliveryProcessModel } from "./models/delivery-process.model";
import { defineFleetVehicleFleetModel } from "./models/fleet-vehicle-fleet.model";
import { defineFleetVehicleModel } from "./models/fleet-vehicle.model";
import { defineFleetModel } from "./models/fleet.model";

dotenv.config();

class SequelizeAdapter {
    public instance: Sequelize;

    constructor() {
        const isTest = process.env.NODE_ENV === "test";

        this.instance = isTest
            ? new Sequelize({
                  dialect: "sqlite",
                  storage: ":memory:",
                  logging: false,
              })
            : new Sequelize({
                  dialect: "postgres",
                  host: process.env.POSTGRES_HOST,
                  port: Number(process.env.POSTGRES_PORT),
                  database: process.env.POSTGRES_DB,
                  username: process.env.POSTGRES_USER,
                  password: process.env.POSTGRES_PASSWORD,
              });
    }

    async connect(forceSync: boolean = false) {
        defineAddressModel(this.instance);
        defineCollectionScheduleModel(this.instance);
        defineDeliveryAppointmentModel(this.instance);
        defineDeliveryProcessModel(this.instance);
        defineDeliveryProcessStatusModel(this.instance);
        defineFleetModel(this.instance);
        defineFleetVehicleModel(this.instance);
        defineFleetVehicleFleetModel(this.instance);

        try {
            await this.instance.authenticate();
            console.log("✅ Conectado ao banco com Sequelize");
            await this.instance.sync({ force: forceSync });
            console.log("📦 Models sincronizados com sucesso");
        } catch (error) {
            console.error("❌ Erro na conexão com o banco de dados:", error);
        }
    }
}

export default new SequelizeAdapter();
