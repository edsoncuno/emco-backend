import { Request, Response, Router } from "express"

const router = Router()

router.put("/:id", (req: Request, res: Response) => {
    res.json({ message: `update item by ${req.params.id}` })
})

export default router