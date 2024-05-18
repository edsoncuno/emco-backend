import { Router } from "express"
import RouterGetStakeholder from "./stakeholderget"
import { postStakeholder } from "./stakeholder.post"
import { putStakeholder } from "./stakeholder.put"
import { deleteStakeholderById } from "./stakeholder.delete"

const router = Router()

router.use(RouterGetStakeholder)
router.post("/", postStakeholder)
router.put("/:id", putStakeholder)
router.delete("/:id", deleteStakeholderById)

export default router