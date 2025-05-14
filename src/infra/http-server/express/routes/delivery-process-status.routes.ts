import { DeliveryProcessStatusRepository } from "@/infra/database/sequelize/repositories/delivery-process-status.repository";
import { Router } from "express";
import { DeliveryProcessStatusController } from "../controllers/delivery-process-status.controller";

const delivery_process_statusRoutes = Router();
const controller = new DeliveryProcessStatusController(new DeliveryProcessStatusRepository());

delivery_process_statusRoutes.get("/", controller.findAll);
delivery_process_statusRoutes.get("/:id", controller.findOne);
delivery_process_statusRoutes.post("/", controller.create);
delivery_process_statusRoutes.put("/:id", controller.update);
delivery_process_statusRoutes.delete("/:id", controller.delete);

export default delivery_process_statusRoutes;
