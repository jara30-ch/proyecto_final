// backend/controllers/auth.controller.js
import { pool } from "../db/connection.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  const { nombre, email, password } = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    await pool.query(
      "INSERT INTO users (nombre, email, password) VALUES ($1, $2, $3)",
      [nombre, email, hashedPassword]
    )
    res.status(201).json({ message: "Usuario registrado con éxito" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error registrando usuario" })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE email=$1", [email])
    if (rows.length === 0) return res.status(401).json({ message: "Usuario no encontrado" })

    const user = rows[0]
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) return res.status(401).json({ message: "Password incorrecta" })

    const token = jwt.sign(
      { id: user.id, email: user.email, rol: user.rol },
      "secreto",
      { expiresIn: "1h" }
    )

    res.json({
      token,
      usuario: { id: user.id, nombre: user.nombre, email: user.email, rol: user.rol }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error en login" })
  }
}