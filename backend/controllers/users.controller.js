import { pool } from "../db/connection.js"

export const getProfile = async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT nombre, rol, id, email FROM users WHERE id = $1",
      [req.user.id]
    )

    res.json(result.rows[0])

  } catch (error) {
    res.status(500).json(error)
  }

}
