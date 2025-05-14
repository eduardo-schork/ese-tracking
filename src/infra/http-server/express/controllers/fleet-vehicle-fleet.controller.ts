import { IFleetVehicleFleetRepository } from "@/domain/repositories/fleet-vehicle-fleet-repository.type";
import { Request, Response } from "express";

export class FleetVehicleFleetController {
    constructor(private repository: IFleetVehicleFleetRepository) {}

    findAll = async (req: Request, res: Response) => {
        const items = await this.repository.findAll();
        res.json(items);
    };

    findOne = async (req: Request, res: Response) => {
        const item = await this.repository.findOne(req.params.id);
        if (!item) return res.status(404).send();
        res.json(item);
    };

    create = async (req: Request, res: Response) => {
        const item = await this.repository.create(req.body);
        res.status(201).json(item);
    };

    update = async (req: Request, res: Response) => {
        const item = await this.repository.update(req.params.id, req.body);
        if (!item) return res.status(404).send();
        res.json(item);
    };

    delete = async (req: Request, res: Response) => {
        await this.repository.delete(req.params.id);
        res.status(204).send();
    };
}
