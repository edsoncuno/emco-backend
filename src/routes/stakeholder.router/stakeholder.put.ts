import { Request, Response, Router } from "express"
import { validationNoExisById } from "../middlewares/validationNoExistById.middleware"

const router = Router()

router.put("/:id", validationNoExisById, async (req: Request, res: Response) => {
    res.json({ message: `update stakeholder by ${req.params.id}` })
})

export default router