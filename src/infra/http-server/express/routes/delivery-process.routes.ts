import { DeliveryProcessRepository } from "@/infra/database/sequelize/repositories/delivery-process.repository";
import { Router } from "express";
import { DeliveryProcessController } from "../controllers/delivery-process.controller";

const delivery_processRoutes = Router();
const controller = new DeliveryProcessController(new DeliveryProcessRepository());

delivery_processRoutes.get("/", controller.findAll);
delivery_processRoutes.get("/:id", controller.findOne);
delivery_processRoutes.post("/", controller.create);
delivery_processRoutes.put("/:id", controller.update);
delivery_processRoutes.delete("/:id", controller.delete);

export default delivery_processRoutes;
