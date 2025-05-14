import { AddressRepository } from "@/infra/database/sequelize/repositories/address.repository";
import { Router } from "express";
import { AddressController } from "../controllers/address.controller";

const addressRoutes = Router();
const controller = new AddressController(new AddressRepository());

addressRoutes.get("/", controller.findAll);
addressRoutes.get("/:id", controller.findOne);
addressRoutes.post("/", controller.create);
addressRoutes.put("/:id", controller.update);
addressRoutes.delete("/:id", controller.delete);

export default addressRoutes;
