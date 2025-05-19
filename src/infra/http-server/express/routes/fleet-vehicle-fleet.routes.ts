import { FleetVehicleFleetRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle-fleet.repository";
import { Router } from "express";
import { FleetVehicleFleetController } from "../controllers/fleet-vehicle-fleet.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const fleet_vehicle_fleetRoutes = Router();
const controller = new FleetVehicleFleetController(new FleetVehicleFleetRepository());

fleet_vehicle_fleetRoutes.get("/", authMiddleware, controller.findAll);
fleet_vehicle_fleetRoutes.get("/:id", authMiddleware, controller.findOne);
fleet_vehicle_fleetRoutes.post("/", authMiddleware, controller.create);
fleet_vehicle_fleetRoutes.put("/:id", authMiddleware, controller.update);
fleet_vehicle_fleetRoutes.delete("/:id",authMiddleware, controller.delete);

export default fleet_vehicle_fleetRoutes;
