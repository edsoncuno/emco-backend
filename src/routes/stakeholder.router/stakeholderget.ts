import { Request, Response, Router } from "express"
import StakeholderModel from "../../models/stakeholder.model"

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    let result = await StakeholderModel.find({});
    res.status(200);
    res.json(result);
})

router.get("/:id", async (req: Request, res: Response) => {
    try {
        // si la cantidad de caracteres del id es valida y no existe
        // retorna null
        // si la cantidad de caracteres del id es valida y existe
        // retorna el objeto buscado
        let result = await StakeholderModel.findById(req.params.id)
        if (result) {
            res.status(200)
            res.json(result)
        } else {
            res.status(400)
            res.json({ name: "Error", message: "No existe el id" })
        }
    } catch {
        // esto sucede en caso de que la cantidad de caracteres de id
        // no sea la indicada, 24
        res.status(400)
        res.json({ name: 'Error', message: "No existe el id" });
    }
})

export default router