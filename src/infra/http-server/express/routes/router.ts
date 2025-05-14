import { Router } from "express";

const router = Router();

import addressRoutes from "./address.routes";
import collection_scheduleRoutes from "./collection-schedule.routes";
import delivery_appointmentRoutes from "./delivery-appointment.routes";
import delivery_process_statusRoutes from "./delivery-process-status.routes";
import delivery_processRoutes from "./delivery-process.routes";
import fleet_vehicle_fleetRoutes from "./fleet-vehicle-fleet.routes";
import fleet_vehicleRoutes from "./fleet-vehicle.routes";
import fleetRoutes from "./fleet.routes";

router.use("/address", addressRoutes);
router.use("/collection-schedule", collection_scheduleRoutes);
router.use("/delivery-appointment", delivery_appointmentRoutes);
router.use("/delivery-process-status", delivery_process_statusRoutes);
router.use("/delivery-process", delivery_processRoutes);
router.use("/fleet", fleetRoutes);
router.use("/fleet-vehicle", fleet_vehicleRoutes);
router.use("/fleet-vehicle-fleet", fleet_vehicle_fleetRoutes);

export default router;
