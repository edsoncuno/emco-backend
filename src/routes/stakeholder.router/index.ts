import { Router } from "express"
import RouterGetStakeholder from "./stakeholderget"
import RouterPostStakeholder from "./stakeholder.post"
import RouterPutStakeholder from "./stakeholder.put"
import RouterDeleteStakeholder from "./stakeholder.delete"

const router = Router()

router.use(RouterGetStakeholder)
router.use(RouterPostStakeholder)
router.use(RouterPutStakeholder)
router.use(RouterDeleteStakeholder)

export default router