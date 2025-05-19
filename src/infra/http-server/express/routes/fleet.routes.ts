import { FleetRepository } from "@/infra/database/sequelize/repositories/fleet.repository";
import { Router } from "express";
import { FleetController } from "../controllers/fleet.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const fleetRoutes = Router();
const controller = new FleetController(new FleetRepository());

fleetRoutes.get("/", authMiddleware, controller.findAll);
fleetRoutes.get("/:id", authMiddleware, controller.findOne);
fleetRoutes.post("/", authMiddleware, controller.create);
fleetRoutes.put("/:id", authMiddleware, controller.update);
fleetRoutes.delete("/:id", authMiddleware, controller.delete);

export default fleetRoutes;
