import { FleetVehicleFleetRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle-fleet.repository";
import { Router } from "express";
import { FleetVehicleFleetController } from "../controllers/fleet-vehicle-fleet.controller";

const fleet_vehicle_fleetRoutes = Router();
const controller = new FleetVehicleFleetController(new FleetVehicleFleetRepository());

fleet_vehicle_fleetRoutes.get("/", controller.findAll);
fleet_vehicle_fleetRoutes.get("/:id", controller.findOne);
fleet_vehicle_fleetRoutes.post("/", controller.create);
fleet_vehicle_fleetRoutes.put("/:id", controller.update);
fleet_vehicle_fleetRoutes.delete("/:id", controller.delete);

export default fleet_vehicle_fleetRoutes;
