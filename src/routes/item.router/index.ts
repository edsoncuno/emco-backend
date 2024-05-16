import { Router } from "express"
import RouterGetItem from "./item.get"
import RouterPostItem from "./item.post"
import RouterPutItem from "./item.put"
import RouterDeleteItem from "./item.delete"

const router = Router()

router.use(RouterGetItem)
router.use(RouterPostItem)
router.use(RouterPutItem)
router.use(RouterDeleteItem)

export default router