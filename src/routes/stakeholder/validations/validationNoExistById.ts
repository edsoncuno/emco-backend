import { Request, Response, NextFunction } from 'express';
import StakeholderModel from '../../../models/stakeholder.model';

export async function validationNoExisById(req: Request, res: Response, next: NextFunction) {
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
        let query = await StakeholderModel.findById(req.params.id)
        if (!query) {
            res.status(400)
            res.json({ message: "El id no existe" })
        } else {
            next();
        }
    }
};