import { DeliveryAppointmentRepository } from "@/infra/database/sequelize/repositories/delivery-appointment.repository";
import { Router } from "express";
import { DeliveryAppointmentController } from "../controllers/delivery-appointment.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const delivery_appointmentRoutes = Router();
const controller = new DeliveryAppointmentController(new DeliveryAppointmentRepository());

delivery_appointmentRoutes.get("/", authMiddleware, controller.findAll);
delivery_appointmentRoutes.get("/:id", authMiddleware, controller.findOne);
delivery_appointmentRoutes.get("/:id", authMiddleware, controller.findOne);
delivery_appointmentRoutes.post("/", authMiddleware, controller.create);
delivery_appointmentRoutes.put("/:id", authMiddleware, controller.update);
delivery_appointmentRoutes.delete("/:id", authMiddleware, controller.delete);

export default delivery_appointmentRoutes;
