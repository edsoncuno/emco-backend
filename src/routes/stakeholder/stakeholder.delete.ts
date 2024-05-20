import { Request, Response } from "express"
import StakeholderModel from "../../models/stakeholder.model"

export async function deleteStakeholderById(req: Request, res: Response) {
    /**
     * si existe, retorna el objeto
     * sino, retorna null
    */
    let query = await StakeholderModel.findByIdAndDelete(req.params.id)
    res.status(200)
    res.end()
}