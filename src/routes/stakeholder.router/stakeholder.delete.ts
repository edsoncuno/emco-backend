import { Request, Response, Router } from "express"
import StakeholderModel from "../../models/stakeholder.model"

const router = Router()

router.delete("/:id", async (req: Request, res: Response) => {
    try {
        // si existe, retorna el objeto borrado
        let result = await StakeholderModel.findByIdAndDelete(req.params.id)
        let tipo: String = "";
        if (result && result.tipo) {
            tipo = result.tipo;
        }
        res.status(200)
        res.json({ name: "Éxito", message: `Se borró al ${tipo}` })
    } catch {
        res.status(400)
        res.json({ name: 'Error', message: "No existe el id" });
    }
})

export default router