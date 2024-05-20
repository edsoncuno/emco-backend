import { Router } from "express"
import { getStakeholderById, getStakeholderAll } from "./stakeholder.get"
import { postStakeholder } from "./stakeholder.post"
import { putStakeholderById } from "./stakeholder.put"
import { deleteStakeholderById } from "./stakeholder.delete"
//validation
import { validationExistByName } from "./validations/validationExistByName"
import { validationNoExisById } from "./validations/validationNoExistById"

const router = Router()

router.get("/", getStakeholderAll)
router.post("/", validationExistByName, postStakeholder)
router.get("/:id", validationNoExisById, getStakeholderById)
router.put("/:id", validationNoExisById, putStakeholderById)
router.delete("/:id", validationNoExisById, deleteStakeholderById)

export default router