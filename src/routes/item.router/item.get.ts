import { Request, Response, Router } from "express"

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "get all item" })
})

router.get("/:id", (req: Request, res: Response) => {
    res.json({ message: `get item by ${req.params.id}` })
})

export default router