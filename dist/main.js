"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/main.ts
var import_dotenv = __toESM(require("dotenv"));

// src/application/usecase/process-delivery-appointment.usecase.ts
var ProcessDeliveryAppointmentUseCase = class {
  constructor(repository) {
    this.repository = repository;
  }
  async execute(data) {
    console.log("\u{1F7E2} Processando agendamento:", data);
    await this.repository.create(data);
  }
};

// src/infra/database/sequelize/sequelize-adapter.ts
var dotenv = __toESM(require("dotenv"));
var import_sequelize9 = require("sequelize");

// src/infra/database/sequelize/models/address.model.ts
var import_sequelize = require("sequelize");
var AddressModel = class extends import_sequelize.Model {
};
var defineAddressModel = (sequelize) => {
  AddressModel.init(
    {
      id: { type: import_sequelize.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize.DataTypes.UUIDV4 },
      street: import_sequelize.DataTypes.STRING,
      number: import_sequelize.DataTypes.STRING,
      complement: import_sequelize.DataTypes.STRING,
      neighborhood: import_sequelize.DataTypes.STRING,
      city: import_sequelize.DataTypes.STRING,
      state: import_sequelize.DataTypes.STRING,
      postalCode: import_sequelize.DataTypes.STRING,
      createdAt: import_sequelize.DataTypes.DATE,
      createdBy: import_sequelize.DataTypes.STRING,
      updatedAt: import_sequelize.DataTypes.DATE,
      updatedBy: import_sequelize.DataTypes.STRING,
      deletedAt: import_sequelize.DataTypes.DATE,
      deletedBy: import_sequelize.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "addresses",
      timestamps: false
    }
  );
  return AddressModel;
};
var address_model_default = AddressModel;

// src/infra/database/sequelize/models/collection-schedule.model.ts
var import_sequelize2 = require("sequelize");
var CollectionScheduleModel = class extends import_sequelize2.Model {
};
var defineCollectionScheduleModel = (sequelize) => {
  CollectionScheduleModel.init(
    {
      id: { type: import_sequelize2.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize2.DataTypes.UUIDV4 },
      scheduledTo: import_sequelize2.DataTypes.DATE,
      addressId: import_sequelize2.DataTypes.UUID,
      createdAt: import_sequelize2.DataTypes.DATE,
      createdBy: import_sequelize2.DataTypes.STRING,
      updatedAt: import_sequelize2.DataTypes.DATE,
      updatedBy: import_sequelize2.DataTypes.STRING,
      deletedAt: import_sequelize2.DataTypes.DATE,
      deletedBy: import_sequelize2.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "CollectionSchedule",
      tableName: "collection_schedules",
      timestamps: false
    }
  );
  return CollectionScheduleModel;
};
var collection_schedule_model_default = CollectionScheduleModel;

// src/infra/database/sequelize/models/delivery-appointment.model.ts
var import_sequelize3 = require("sequelize");
var DeliveryAppointmentModel = class extends import_sequelize3.Model {
};
var defineDeliveryAppointmentModel = (sequelize) => {
  DeliveryAppointmentModel.init(
    {
      id: { type: import_sequelize3.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize3.DataTypes.UUIDV4 },
      scheduledTo: import_sequelize3.DataTypes.DATE,
      deliveryProcessId: import_sequelize3.DataTypes.UUID,
      addressId: import_sequelize3.DataTypes.UUID,
      createdAt: import_sequelize3.DataTypes.DATE,
      createdBy: import_sequelize3.DataTypes.STRING,
      updatedAt: import_sequelize3.DataTypes.DATE,
      updatedBy: import_sequelize3.DataTypes.STRING,
      deletedAt: import_sequelize3.DataTypes.DATE,
      deletedBy: import_sequelize3.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "DeliveryAppointment",
      tableName: "delivery_appointments",
      timestamps: false
    }
  );
  return DeliveryAppointmentModel;
};
var delivery_appointment_model_default = DeliveryAppointmentModel;

// src/infra/database/sequelize/models/delivery-process-status.model.ts
var import_sequelize4 = require("sequelize");
var DeliveryProcessStatusModel = class extends import_sequelize4.Model {
};
var defineDeliveryProcessStatusModel = (sequelize) => {
  DeliveryProcessStatusModel.init(
    {
      id: { type: import_sequelize4.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize4.DataTypes.UUIDV4 },
      name: import_sequelize4.DataTypes.STRING,
      createdAt: import_sequelize4.DataTypes.DATE,
      createdBy: import_sequelize4.DataTypes.STRING,
      updatedAt: import_sequelize4.DataTypes.DATE,
      updatedBy: import_sequelize4.DataTypes.STRING,
      deletedAt: import_sequelize4.DataTypes.DATE,
      deletedBy: import_sequelize4.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "DeliveryProcessStatus",
      tableName: "delivery_process_statuses",
      timestamps: false
    }
  );
  return DeliveryProcessStatusModel;
};
var delivery_process_status_model_default = DeliveryProcessStatusModel;

// src/infra/database/sequelize/models/delivery-process.model.ts
var import_sequelize5 = require("sequelize");
var DeliveryProcessModel = class extends import_sequelize5.Model {
};
var defineDeliveryProcessModel = (sequelize) => {
  DeliveryProcessModel.init(
    {
      id: { type: import_sequelize5.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize5.DataTypes.UUIDV4 },
      fleetId: import_sequelize5.DataTypes.UUID,
      fleetVehicleId: import_sequelize5.DataTypes.UUID,
      statusId: import_sequelize5.DataTypes.UUID,
      startedAt: import_sequelize5.DataTypes.DATE,
      endedAt: import_sequelize5.DataTypes.DATE,
      createdAt: import_sequelize5.DataTypes.DATE,
      createdBy: import_sequelize5.DataTypes.STRING,
      updatedAt: import_sequelize5.DataTypes.DATE,
      updatedBy: import_sequelize5.DataTypes.STRING,
      deletedAt: import_sequelize5.DataTypes.DATE,
      deletedBy: import_sequelize5.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "DeliveryProcess",
      tableName: "delivery_processes",
      timestamps: false
    }
  );
  return DeliveryProcessModel;
};
var delivery_process_model_default = DeliveryProcessModel;

// src/infra/database/sequelize/models/fleet-vehicle-fleet.model.ts
var import_sequelize6 = require("sequelize");
var FleetVehicleFleetModel = class extends import_sequelize6.Model {
};
var defineFleetVehicleFleetModel = (sequelize) => {
  FleetVehicleFleetModel.init(
    {
      id: { type: import_sequelize6.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize6.DataTypes.UUIDV4 },
      fleetVehicleId: import_sequelize6.DataTypes.UUID,
      fleetId: import_sequelize6.DataTypes.UUID,
      createdAt: import_sequelize6.DataTypes.DATE,
      createdBy: import_sequelize6.DataTypes.STRING,
      updatedAt: import_sequelize6.DataTypes.DATE,
      updatedBy: import_sequelize6.DataTypes.STRING,
      deletedAt: import_sequelize6.DataTypes.DATE,
      deletedBy: import_sequelize6.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "FleetVehicleFleet",
      tableName: "fleet_vehicle_fleet",
      timestamps: false
    }
  );
  return FleetVehicleFleetModel;
};
var fleet_vehicle_fleet_model_default = FleetVehicleFleetModel;

// src/infra/database/sequelize/models/fleet-vehicle.model.ts
var import_sequelize7 = require("sequelize");
var FleetVehicleModel = class extends import_sequelize7.Model {
};
var defineFleetVehicleModel = (sequelize) => {
  FleetVehicleModel.init(
    {
      id: { type: import_sequelize7.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize7.DataTypes.UUIDV4 },
      model: import_sequelize7.DataTypes.STRING,
      plate: import_sequelize7.DataTypes.STRING,
      cpfDriver: import_sequelize7.DataTypes.STRING,
      renavam: import_sequelize7.DataTypes.STRING,
      createdAt: import_sequelize7.DataTypes.DATE,
      createdBy: import_sequelize7.DataTypes.STRING,
      updatedAt: import_sequelize7.DataTypes.DATE,
      updatedBy: import_sequelize7.DataTypes.STRING,
      deletedAt: import_sequelize7.DataTypes.DATE,
      deletedBy: import_sequelize7.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "FleetVehicle",
      tableName: "fleet_vehicles",
      timestamps: false
    }
  );
  return FleetVehicleModel;
};
var fleet_vehicle_model_default = FleetVehicleModel;

// src/infra/database/sequelize/models/fleet.model.ts
var import_sequelize8 = require("sequelize");
var FleetModel = class extends import_sequelize8.Model {
};
var defineFleetModel = (sequelize) => {
  FleetModel.init(
    {
      id: { type: import_sequelize8.DataTypes.UUID, primaryKey: true, defaultValue: import_sequelize8.DataTypes.UUIDV4 },
      name: import_sequelize8.DataTypes.STRING,
      createdAt: import_sequelize8.DataTypes.DATE,
      createdBy: import_sequelize8.DataTypes.STRING,
      updatedAt: import_sequelize8.DataTypes.DATE,
      updatedBy: import_sequelize8.DataTypes.STRING,
      deletedAt: import_sequelize8.DataTypes.DATE,
      deletedBy: import_sequelize8.DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Fleet",
      tableName: "fleets",
      timestamps: false
    }
  );
  return FleetModel;
};
var fleet_model_default = FleetModel;

// src/infra/database/sequelize/sequelize-adapter.ts
dotenv.config();
var SequelizeAdapter = class {
  constructor() {
    this.instance = new import_sequelize9.Sequelize({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      logging: false
    });
  }
  async connect(forceSync = false) {
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
      console.log("\u2705 Conectado ao banco com Sequelize");
      await this.instance.sync({ force: forceSync });
      console.log("\u{1F4E6} Models sincronizados com sucesso");
    } catch (error) {
      console.error("\u274C Erro na conex\xE3o com o banco de dados:", error);
    }
  }
};
var sequelize_adapter_default = new SequelizeAdapter();

// src/infra/database/database.port.ts
var DatabasePort = sequelize_adapter_default;
var database_port_default = DatabasePort;

// src/infra/database/sequelize/repositories/delivery-appointment.repository.ts
var DeliveryAppointmentRepository = class {
  async findAll() {
    return await delivery_appointment_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await delivery_appointment_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await delivery_appointment_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await delivery_appointment_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await delivery_appointment_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/express.adapter.ts
var import_express10 = __toESM(require("express"));

// src/infra/http-server/express/routes/router.ts
var import_express9 = require("express");

// src/infra/database/sequelize/repositories/address.repository.ts
var AddressRepository = class {
  async findAll() {
    return await address_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await address_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await address_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const address = await address_model_default.findByPk(id);
    if (!address) return null;
    await address.update(data);
    return address.get({ plain: true });
  }
  async delete(id) {
    await address_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/address.routes.ts
var import_express = require("express");

// src/infra/http-server/express/controllers/address.controller.ts
var AddressController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/address.routes.ts
var addressRoutes = (0, import_express.Router)();
var controller = new AddressController(new AddressRepository());
addressRoutes.get("/", controller.findAll);
addressRoutes.get("/:id", controller.findOne);
addressRoutes.post("/", controller.create);
addressRoutes.put("/:id", controller.update);
addressRoutes.delete("/:id", controller.delete);
var address_routes_default = addressRoutes;

// src/infra/database/sequelize/repositories/collection-schedule.repository.ts
var CollectionScheduleRepository = class {
  async findAll() {
    return await collection_schedule_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await collection_schedule_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await collection_schedule_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await collection_schedule_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await collection_schedule_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/collection-schedule.routes.ts
var import_express2 = require("express");

// src/infra/http-server/express/controllers/collection-schedule.controller.ts
var CollectionScheduleController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/collection-schedule.routes.ts
var collection_scheduleRoutes = (0, import_express2.Router)();
var controller2 = new CollectionScheduleController(new CollectionScheduleRepository());
collection_scheduleRoutes.get("/", controller2.findAll);
collection_scheduleRoutes.get("/:id", controller2.findOne);
collection_scheduleRoutes.post("/", controller2.create);
collection_scheduleRoutes.put("/:id", controller2.update);
collection_scheduleRoutes.delete("/:id", controller2.delete);
var collection_schedule_routes_default = collection_scheduleRoutes;

// src/infra/http-server/express/routes/delivery-appointment.routes.ts
var import_express3 = require("express");

// src/infra/http-server/express/controllers/delivery-appointment.controller.ts
var DeliveryAppointmentController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/delivery-appointment.routes.ts
var delivery_appointmentRoutes = (0, import_express3.Router)();
var controller3 = new DeliveryAppointmentController(new DeliveryAppointmentRepository());
delivery_appointmentRoutes.get("/", controller3.findAll);
delivery_appointmentRoutes.get("/:id", controller3.findOne);
delivery_appointmentRoutes.post("/", controller3.create);
delivery_appointmentRoutes.put("/:id", controller3.update);
delivery_appointmentRoutes.delete("/:id", controller3.delete);
var delivery_appointment_routes_default = delivery_appointmentRoutes;

// src/infra/database/sequelize/repositories/delivery-process-status.repository.ts
var DeliveryProcessStatusRepository = class {
  async findAll() {
    return await delivery_process_status_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await delivery_process_status_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await delivery_process_status_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await delivery_process_status_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await delivery_process_status_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/delivery-process-status.routes.ts
var import_express4 = require("express");

// src/infra/http-server/express/controllers/delivery-process-status.controller.ts
var DeliveryProcessStatusController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/delivery-process-status.routes.ts
var delivery_process_statusRoutes = (0, import_express4.Router)();
var controller4 = new DeliveryProcessStatusController(new DeliveryProcessStatusRepository());
delivery_process_statusRoutes.get("/", controller4.findAll);
delivery_process_statusRoutes.get("/:id", controller4.findOne);
delivery_process_statusRoutes.post("/", controller4.create);
delivery_process_statusRoutes.put("/:id", controller4.update);
delivery_process_statusRoutes.delete("/:id", controller4.delete);
var delivery_process_status_routes_default = delivery_process_statusRoutes;

// src/infra/database/sequelize/repositories/delivery-process.repository.ts
var DeliveryProcessRepository = class {
  async findAll() {
    return await delivery_process_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await delivery_process_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await delivery_process_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await delivery_process_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await delivery_process_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/delivery-process.routes.ts
var import_express5 = require("express");

// src/infra/http-server/express/controllers/delivery-process.controller.ts
var DeliveryProcessController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/delivery-process.routes.ts
var delivery_processRoutes = (0, import_express5.Router)();
var controller5 = new DeliveryProcessController(new DeliveryProcessRepository());
delivery_processRoutes.get("/", controller5.findAll);
delivery_processRoutes.get("/:id", controller5.findOne);
delivery_processRoutes.post("/", controller5.create);
delivery_processRoutes.put("/:id", controller5.update);
delivery_processRoutes.delete("/:id", controller5.delete);
var delivery_process_routes_default = delivery_processRoutes;

// src/infra/database/sequelize/repositories/fleet-vehicle-fleet.repository.ts
var FleetVehicleFleetRepository = class {
  async findAll() {
    return await fleet_vehicle_fleet_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await fleet_vehicle_fleet_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await fleet_vehicle_fleet_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await fleet_vehicle_fleet_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await fleet_vehicle_fleet_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/fleet-vehicle-fleet.routes.ts
var import_express6 = require("express");

// src/infra/http-server/express/controllers/fleet-vehicle-fleet.controller.ts
var FleetVehicleFleetController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/fleet-vehicle-fleet.routes.ts
var fleet_vehicle_fleetRoutes = (0, import_express6.Router)();
var controller6 = new FleetVehicleFleetController(new FleetVehicleFleetRepository());
fleet_vehicle_fleetRoutes.get("/", controller6.findAll);
fleet_vehicle_fleetRoutes.get("/:id", controller6.findOne);
fleet_vehicle_fleetRoutes.post("/", controller6.create);
fleet_vehicle_fleetRoutes.put("/:id", controller6.update);
fleet_vehicle_fleetRoutes.delete("/:id", controller6.delete);
var fleet_vehicle_fleet_routes_default = fleet_vehicle_fleetRoutes;

// src/infra/database/sequelize/repositories/fleet-vehicle.repository.ts
var FleetVehicleRepository = class {
  async findAll() {
    return await fleet_vehicle_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await fleet_vehicle_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await fleet_vehicle_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await fleet_vehicle_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await fleet_vehicle_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/fleet-vehicle.routes.ts
var import_express7 = require("express");

// src/infra/http-server/express/controllers/fleet-vehicle.controller.ts
var FleetVehicleController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/fleet-vehicle.routes.ts
var fleet_vehicleRoutes = (0, import_express7.Router)();
var controller7 = new FleetVehicleController(new FleetVehicleRepository());
fleet_vehicleRoutes.get("/", controller7.findAll);
fleet_vehicleRoutes.get("/:id", controller7.findOne);
fleet_vehicleRoutes.post("/", controller7.create);
fleet_vehicleRoutes.put("/:id", controller7.update);
fleet_vehicleRoutes.delete("/:id", controller7.delete);
var fleet_vehicle_routes_default = fleet_vehicleRoutes;

// src/infra/database/sequelize/repositories/fleet.repository.ts
var FleetRepository = class {
  async findAll() {
    return await fleet_model_default.findAll({ raw: true });
  }
  async findOne(id) {
    return await fleet_model_default.findByPk(id, { raw: true });
  }
  async create(data) {
    const created = await fleet_model_default.create(data);
    return created.get({ plain: true });
  }
  async update(id, data) {
    const record = await fleet_model_default.findByPk(id);
    if (!record) return null;
    await record.update(data);
    return record.get({ plain: true });
  }
  async delete(id) {
    await fleet_model_default.destroy({ where: { id } });
  }
};

// src/infra/http-server/express/routes/fleet.routes.ts
var import_express8 = require("express");

// src/infra/http-server/express/controllers/fleet.controller.ts
var FleetController = class {
  constructor(repository) {
    this.repository = repository;
    this.findAll = async (req, res) => {
      const items = await this.repository.findAll();
      res.json(items);
    };
    this.findOne = async (req, res) => {
      const item = await this.repository.findOne(req.params.id);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.create = async (req, res) => {
      const item = await this.repository.create(req.body);
      res.status(201).json(item);
    };
    this.update = async (req, res) => {
      const item = await this.repository.update(req.params.id, req.body);
      if (!item) return res.status(404).send();
      res.json(item);
    };
    this.delete = async (req, res) => {
      await this.repository.delete(req.params.id);
      res.status(204).send();
    };
  }
};

// src/infra/http-server/express/routes/fleet.routes.ts
var fleetRoutes = (0, import_express8.Router)();
var controller8 = new FleetController(new FleetRepository());
fleetRoutes.get("/", controller8.findAll);
fleetRoutes.get("/:id", controller8.findOne);
fleetRoutes.post("/", controller8.create);
fleetRoutes.put("/:id", controller8.update);
fleetRoutes.delete("/:id", controller8.delete);
var fleet_routes_default = fleetRoutes;

// src/infra/http-server/express/routes/router.ts
var router = (0, import_express9.Router)();
router.use("/address", address_routes_default);
router.use("/collection-schedule", collection_schedule_routes_default);
router.use("/delivery-appointment", delivery_appointment_routes_default);
router.use("/delivery-process-status", delivery_process_status_routes_default);
router.use("/delivery-process", delivery_process_routes_default);
router.use("/fleet", fleet_routes_default);
router.use("/fleet-vehicle", fleet_vehicle_routes_default);
router.use("/fleet-vehicle-fleet", fleet_vehicle_fleet_routes_default);
var router_default = router;

// src/infra/http-server/express/express.adapter.ts
var ExpressAdapter = class {
  constructor() {
    this.app = (0, import_express10.default)();
    this.app.use(import_express10.default.json());
    this.app.use("/api", router_default);
    this.app.get("/health", (_, res) => res.send("\u2705 Tracking service is running"));
  }
  listen(port) {
    this.app.listen(port, () => {
      console.log(`\u{1F680} HTTP Server listening on port ${port}`);
    });
  }
};
var express_adapter_default = new ExpressAdapter();

// src/infra/http-server/http-server.port.ts
var HttpServerPort = express_adapter_default;
var http_server_port_default = HttpServerPort;

// src/infra/queue-consumer/rabbitmq-adapter.ts
var import_amqplib = __toESM(require("amqplib"));
var RabbitMQConsumerAdapter = class {
  constructor(useCase) {
    this.useCase = useCase;
    this.queueName = process.env.QUEUE_NAME || "";
    this.rabbitUrl = process.env.RABBITMQ_URL || "";
  }
  async start() {
    const connection = await import_amqplib.default.connect(this.rabbitUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(this.queueName, { durable: true });
    console.log(`\u{1F7E1} Consumindo fila: ${this.queueName}`);
    channel.consume(
      this.queueName,
      async (msg) => {
        if (!msg) return;
        try {
          const content = JSON.parse(msg.content.toString());
          await this.useCase.execute(content);
          channel.ack(msg);
        } catch (error) {
          console.error("\u274C Erro ao processar mensagem:", error);
          channel.nack(msg, false, false);
        }
      },
      { noAck: false }
    );
  }
};

// src/main.ts
import_dotenv.default.config();
var PORT = process.env.PORT || 3001;
async function bootstrap() {
  await database_port_default.connect(false);
  http_server_port_default.listen(PORT);
  const repository = new DeliveryAppointmentRepository();
  const useCase = new ProcessDeliveryAppointmentUseCase(repository);
  const queueConsumer = new RabbitMQConsumerAdapter(useCase);
  await queueConsumer.start();
}
bootstrap();
