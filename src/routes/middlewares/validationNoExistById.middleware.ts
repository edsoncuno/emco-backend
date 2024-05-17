import { Request, Response, NextFunction } from 'express';
import StakeholderModel from '../../models/stakeholder.model';

export const validationNoExisById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await StakeholderModel.findById(req.params.id)
        next();
    } catch (error) {
        // esto sucede en caso de que la cantidad de caracteres de id
        // no sea la indicada, 24
        console.error(error);
        res.status(500);
        res.json({
            name: "Error", message: "Error del servidor"
        });
    }
};