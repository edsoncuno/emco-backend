import { Request, Response, NextFunction } from 'express';
import StakeholderModel from '../../models/stakeholder.model';

export const validationExistByName = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await StakeholderModel.findOne({ nombre: req.body.nombre });
        if (exist) {
            res.status(400)
            res.json({ name: "Error", message: 'El nombre ya está siendo usado' });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ name: "Error", message: "Error del servidor" });
    }
};