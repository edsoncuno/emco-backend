import { Request, Response, NextFunction } from 'express';
import StakeholderModel from '../../../models/stakeholder.model';

export async function validationExistByName(req: Request, res: Response, next: NextFunction) {
    /**
     * Si existe retorna el objeto
     * sino, retorna null
     */
    const exist = await StakeholderModel.findOne({ nombre: req.body.nombre });
    if (exist) {
        res.status(400)
        res.json({ message: 'El nombre ya está siendo usado' });
    } else {
        next();
    }
};