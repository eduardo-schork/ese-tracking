import { CollectionScheduleRepository } from "@/infra/database/sequelize/repositories/collection-schedule.repository";
import { Router } from "express";
import { CollectionScheduleController } from "../controllers/collection-schedule.controller";

const collection_scheduleRoutes = Router();
const controller = new CollectionScheduleController(new CollectionScheduleRepository());

collection_scheduleRoutes.get("/", controller.findAll);
collection_scheduleRoutes.get("/:id", controller.findOne);
collection_scheduleRoutes.post("/", controller.create);
collection_scheduleRoutes.put("/:id", controller.update);
collection_scheduleRoutes.delete("/:id", controller.delete);

export default collection_scheduleRoutes;
