import { Request, Response } from "express"
import StakeholderModel from "../../models/stakeholder.model"

export async function deleteStakeholderById(req: Request, res: Response) {
    /**
     * para que el id sea valido debe cumplir:
     * tener 24 caracteres
     */
    if (req.params.id.length != 24) {
        res.status(400)
        res.json({ message: "El id no es válido" });
    } else {
        /**
         * si existe, retorna el objeto
         * sino, retorna null
        */
        let query = await StakeholderModel.findByIdAndDelete(req.params.id)
        if (!query) {
            res.status(400)
            res.json({ message: "El id no existe" })
        } else {
            res.status(200)
            res.end()
        }
    }
}