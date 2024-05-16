import { Request, Response, Router } from "express"

const router = Router()

router.post("/", (req: Request, res: Response) => {
    res.json({ message: "create item" })
})

export default router