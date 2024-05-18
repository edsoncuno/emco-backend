import { Request, Response } from "express"
import StakeholderModel from "../../models/stakeholder.model"

export async function postStakeholder(req: Request, res: Response) {
    const newStakeholder = new StakeholderModel({
        nombre: req.body.nombre ? req.body.nombre : "",
        lugar: req.body.lugar ? req.body.lugar : "",
        tipo: req.body.tipo ? req.body.tipo : ""
    })
    /**
     * retorna el objeto
     */
    await newStakeholder.save()
    res.status(200);
    res.end();
}