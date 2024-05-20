import { Request, Response } from "express"
import StakeholderModel from "../../models/stakeholder.model"

export async function getStakeholderAll(req: Request, res: Response) {
    let query = await StakeholderModel.find({});
    res.status(200);
    res.json(query);
}

export async function getStakeholderById(req: Request, res: Response) {
    let query = await StakeholderModel.findById(req.params.id)
    res.status(200)
    res.json(query)
}