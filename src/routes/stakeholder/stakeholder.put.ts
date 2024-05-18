import { Request, Response } from "express"
// import { validationNoExisById } from "../middlewares/validationNoExistById.middleware"
import StakeholderModel from '../../models/stakeholder.model';
//import { validationExistByName } from "../middlewares/validationExistByName.middleware"

export async function putStakeholder(req: Request, res: Response) {
    /**
     * para que el id sea valido debe cumplir:
     * tener 24 caracteres
     */
    if (req.params.id.length != 24) {
        res.status(400)
        res.json({ message: "El id no es válido" })
    } else {
        /**
         * si existe, retorna el objeto
         * sino, retorna null
        */
        if (!await StakeholderModel.findById(req.params.id)) {
            res.status(400)
            res.json({ message: "El id no existe" })
        } else {
            /*
            * obtener atributo de body que se podria necsita
            * en este endpoint
            */
            const keys: (keyof any)[] = ["nombre", "lugar", "tipo"];
            let document: any = {};

            keys.forEach(key => {
                if (key in req.body) {
                    document[key] = req.body[key];
                }
            });
            /*
            * retorna el objeto actualizado
            */
            await StakeholderModel.findByIdAndUpdate(
                req.params.id,
                { $set: document },
                { new: true }
            );
            res.status(200)
            res.end()
        }
    }
}