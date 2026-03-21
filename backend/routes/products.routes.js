import { Router } from "express"
import { verificarToken } from "../middlewares/auth.middleware.js"
import { verificarAdmin } from "../middlewares/admin.middleware.js"

import {
 getProducts,
 getProductById,
 createProduct,
 updateProduct,
 deleteProduct
} from "../controllers/products.controller.js"

const router = Router()

router.get("/", getProducts)
router.get("/:id", getProductById)

router.post("/", verificarToken, verificarAdmin, createProduct)
router.put("/:id", verificarToken, verificarAdmin, updateProduct)
router.delete("/:id", verificarToken, verificarAdmin, deleteProduct)

export default router
