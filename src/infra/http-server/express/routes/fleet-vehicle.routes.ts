import { FleetVehicleRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle.repository";
import { Router } from "express";
import { FleetVehicleController } from "../controllers/fleet-vehicle.controller";

const fleet_vehicleRoutes = Router();
const controller = new FleetVehicleController(new FleetVehicleRepository());

fleet_vehicleRoutes.get("/", controller.findAll);
fleet_vehicleRoutes.get("/:id", controller.findOne);
fleet_vehicleRoutes.post("/", controller.create);
fleet_vehicleRoutes.put("/:id", controller.update);
fleet_vehicleRoutes.delete("/:id", controller.delete);

export default fleet_vehicleRoutes;
