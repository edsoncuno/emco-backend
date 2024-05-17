import { Request, Response, Router } from "express"
// import { validationNoExisById } from "../middlewares/validationNoExistById.middleware"
import StakeholderModel from '../../models/stakeholder.model';
//import { validationExistByName } from "../middlewares/validationExistByName.middleware"
import { Stakeholder } from "../../interfaces/stakeholder.interface"

const router = Router()

router.put("/:id", async (req: Request, res: Response) => {
    // para que el id sea valido en este caso debe tener 24 caracteres
    if (req.params.id.length != 24) {
        res.status(400)
        res.json({ name: "Error", message: "El id no es válido" })
    } else if (!await StakeholderModel.findById(req.params.id)) {
        res.status(400)
        res.json({ name: "Error", message: "El id no existe" })
    } else {
        res.status(200)
        res.json(req.body)
        /*
        let result = await StakeholderModel.findByIdAndUpdate(
            req.params.id,
            { $set: {} },
            { new: true }
        );
        res.json({ message: `update stakeholder by id : ${req.params.id}` })
        */
    }
})

export default router