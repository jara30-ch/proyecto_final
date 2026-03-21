import { pool } from "../db/connection.js"

export const addToCart = async (req, res) => {

  res.json({ message: "Producto agregado al carrito (pendiente implementación)" })

}

export const getCart = async (req, res) => {

  res.json({ message: "Carrito del usuario (pendiente implementación)" })

}

export const removeFromCart = async (req, res) => {

  res.json({ message: "Producto eliminado del carrito (pendiente implementación)" })

}
