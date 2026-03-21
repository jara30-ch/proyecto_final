import { Router } from "express"
import { verificarToken } from "../middlewares/auth.middleware.js"
import { getProfile } from "../controllers/users.controller.js"

const router = Router()

router.get("/profile", verificarToken, getProfile)

export default router
