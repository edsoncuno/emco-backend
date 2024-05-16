import { Router } from "express"
import ItemRouter from "./item.router" 
import StakeholderRouter from "./stakeholder.router"

const router = Router()

router.use("/items", ItemRouter)
router.use("/stakeholders", StakeholderRouter)

export default router 