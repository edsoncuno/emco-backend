import { Request, Response } from "express"
import StakeholderModel from '../../models/stakeholder.model';

export async function putStakeholderById(req: Request, res: Response) {
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