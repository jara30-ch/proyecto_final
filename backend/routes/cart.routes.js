import { Router } from "express"
import { verificarToken } from "../middlewares/auth.middleware.js"

import {
 addToCart,
 getCart,
 removeFromCart
} from "../controllers/cart.controller.js"

const router = Router()

router.post("/", verificarToken, addToCart)
router.get("/", verificarToken, getCart)
router.delete("/:id", verificarToken, removeFromCart)

export default router
