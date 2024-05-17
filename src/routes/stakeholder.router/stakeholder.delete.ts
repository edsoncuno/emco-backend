import { Request, Response, Router } from "express"
import StakeholderModel from "../../models/stakeholder.model"

const router = Router()

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        let result = await StakeholderModel.findByIdAndDelete(req.params.id)
        // si la cantidad de caracteres del id es valida y no existe
        // retorna null
        // si la cantidad de caracteres del id es valida y existe
        // retorna el objeto borrado
        if (result && result.tipo) {
            res.status(200)
            res.json({ name: "Éxito", message: `Se borró al ${result.tipo}` })
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