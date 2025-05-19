import { DeliveryProcessStatusRepository } from "@/infra/database/sequelize/repositories/delivery-process-status.repository";
import { Router } from "express";
import { DeliveryProcessStatusController } from "../controllers/delivery-process-status.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const delivery_process_statusRoutes = Router();
const controller = new DeliveryProcessStatusController(new DeliveryProcessStatusRepository());

delivery_process_statusRoutes.get("/", authMiddleware, controller.findAll);
delivery_process_statusRoutes.get("/:id", authMiddleware, controller.findOne);
delivery_process_statusRoutes.post("/", authMiddleware, controller.create);
delivery_process_statusRoutes.put("/:id", authMiddleware, controller.update);
delivery_process_statusRoutes.delete("/:id", authMiddleware, controller.delete);

export default delivery_process_statusRoutes;
