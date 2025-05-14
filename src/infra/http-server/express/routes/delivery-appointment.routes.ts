import { DeliveryAppointmentRepository } from "@/infra/database/sequelize/repositories/delivery-appointment.repository";
import { Router } from "express";
import { DeliveryAppointmentController } from "../controllers/delivery-appointment.controller";

const delivery_appointmentRoutes = Router();
const controller = new DeliveryAppointmentController(new DeliveryAppointmentRepository());

delivery_appointmentRoutes.get("/", controller.findAll);
delivery_appointmentRoutes.get("/:id", controller.findOne);
delivery_appointmentRoutes.post("/", controller.create);
delivery_appointmentRoutes.put("/:id", controller.update);
delivery_appointmentRoutes.delete("/:id", controller.delete);

export default delivery_appointmentRoutes;
