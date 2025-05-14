import { FleetRepository } from "@/infra/database/sequelize/repositories/fleet.repository";
import { Router } from "express";
import { FleetController } from "../controllers/fleet.controller";

const fleetRoutes = Router();
const controller = new FleetController(new FleetRepository());

fleetRoutes.get("/", controller.findAll);
fleetRoutes.get("/:id", controller.findOne);
fleetRoutes.post("/", controller.create);
fleetRoutes.put("/:id", controller.update);
fleetRoutes.delete("/:id", controller.delete);

export default fleetRoutes;
