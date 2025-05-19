import { FleetVehicleRepository } from "@/infra/database/sequelize/repositories/fleet-vehicle.repository";
import { Router } from "express";
import { FleetVehicleController } from "../controllers/fleet-vehicle.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const fleet_vehicleRoutes = Router();
const controller = new FleetVehicleController(new FleetVehicleRepository());

fleet_vehicleRoutes.get("/", authMiddleware, controller.findAll);
fleet_vehicleRoutes.get("/:id", authMiddleware, controller.findOne);
fleet_vehicleRoutes.post("/", authMiddleware, controller.create);
fleet_vehicleRoutes.put("/:id", authMiddleware, controller.update);
fleet_vehicleRoutes.delete("/:id", authMiddleware, controller.delete);

export default fleet_vehicleRoutes;
