import { AddressRepository } from "@/infra/database/sequelize/repositories/address.repository";
import { Router } from "express";
import { AddressController } from "../controllers/address.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const addressRoutes = Router();
const controller = new AddressController(new AddressRepository());

addressRoutes.get("/", authMiddleware, controller.findAll);
addressRoutes.get("/:id", authMiddleware, controller.findOne);
addressRoutes.post("/", authMiddleware, controller.create);
addressRoutes.put("/:id", authMiddleware, controller.update);
addressRoutes.delete("/:id", authMiddleware, controller.delete);

export default addressRoutes;
