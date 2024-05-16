import { Request, Response, NextFunction } from 'express';
import StakeholderModel from '../../models/stakeholder.model';

export const validationNoExisById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // findById retorna el objeto 
        await StakeholderModel.findById(req.params.id)
        // si lo anteior no falla, significa que si existe
        next();
    } catch (error) {
        console.error(error);
        res.status(400);
        res.json({ name: "Error", message: "No existe el id" });
    }
};