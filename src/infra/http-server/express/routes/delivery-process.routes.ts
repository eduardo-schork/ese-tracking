import { DeliveryProcessRepository } from "@/infra/database/sequelize/repositories/delivery-process.repository";
import { Router } from "express";
import { DeliveryProcessController } from "../controllers/delivery-process.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const delivery_processRoutes = Router();
const controller = new DeliveryProcessController(new DeliveryProcessRepository());

delivery_processRoutes.get("/", authMiddleware, controller.findAll);
delivery_processRoutes.get("/:id", authMiddleware, controller.findOne);
delivery_processRoutes.post("/", authMiddleware, controller.create);
delivery_processRoutes.put("/:id", authMiddleware, controller.update);
delivery_processRoutes.delete("/:id", authMiddleware, controller.delete);

export default delivery_processRoutes;
