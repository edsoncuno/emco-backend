import { Request, Response, Router } from "express"
import StakeholderModel from "../../models/stakeholder.model"

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    let result = await StakeholderModel.find({});
    res.json(result)
})

router.get("/:id", async (req: Request, res: Response) => {
    try {
        let result = await StakeholderModel.findById(req.params.id)
        res.status(200)
        res.json(result)
    } catch {
        res.status(400)
        res.json({ name: 'Error', message: "No existe el id" });
    }
})

export default router