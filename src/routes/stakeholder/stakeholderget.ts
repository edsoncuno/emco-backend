import { Request, Response, Router } from "express"
import StakeholderModel from "../../models/stakeholder.model"

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    let query = await StakeholderModel.find({});
    res.status(200);
    res.json(query);
})

router.get("/:id", async (req: Request, res: Response) => {
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
            res.status(200)
            res.json(query)
        }
    }
})

export default router