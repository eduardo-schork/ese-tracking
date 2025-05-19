import { CollectionScheduleRepository } from "@/infra/database/sequelize/repositories/collection-schedule.repository";
import { Router } from "express";
import { CollectionScheduleController } from "../controllers/collection-schedule.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const collection_scheduleRoutes = Router();
const controller = new CollectionScheduleController(new CollectionScheduleRepository());

collection_scheduleRoutes.get("/", authMiddleware, controller.findAll);
collection_scheduleRoutes.get("/:id", authMiddleware, controller.findOne);
collection_scheduleRoutes.post("/", authMiddleware, controller.create);
collection_scheduleRoutes.put("/:id", authMiddleware, controller.update);
collection_scheduleRoutes.delete("/:id", authMiddleware, controller.delete);

export default collection_scheduleRoutes;
