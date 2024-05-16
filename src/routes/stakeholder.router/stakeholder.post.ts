import { Request, Response, Router } from "express"
import StakeholderModel from "../../models/stakeholder.model"

import { validationExistByName } from "../middlewares/validationExistByName.middleware"

const router = Router()

router.post("/", validationExistByName, async (req: Request, res: Response) => {
    const newStakeholder = new StakeholderModel({
        nombre: req.body.nombre ? req.body.nombre : "",
        lugar: req.body.lugar ? req.body.lugar : "",
        tipo: req.body.tipo ? req.body.tipo : ""
    })
    await newStakeholder.save()
    res.status(200)
    let newMessage: String = newStakeholder.tipo == "cliente" ? "Se agregó al cliente" : "Se agregó al proveedor"
    res.json({ name: "Éxito", message: newMessage })
})

export default router