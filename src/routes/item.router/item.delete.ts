import { Request, Response, Router } from "express"

const router = Router()

router.delete("/:id", (req: Request, res: Response) => {
    res.json({ message: `delete item by ${req.params.id}` })
})

export default router