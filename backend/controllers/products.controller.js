import { pool } from "../db/connection.js"

// Obtener todos los productos
export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products")
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error obteniendo productos" })
  }
}

// Obtener producto por ID
export const getProductById = async (req, res) => {
  const { id } = req.params
  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    )
    if (result.rows.length === 0) return res.status(404).json({ message: "Producto no encontrado" })
    res.json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error obteniendo producto" })
  }
}

// Crear producto
export const createProduct = async (req, res) => {
  try {
    const { nombre, descripcion, precio, imagen, categoria } = req.body

    const query = `
      INSERT INTO products (nombre, descripcion, precio, imagen, categoria)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `
    const values = [nombre, descripcion, precio, imagen, categoria]

    const result = await pool.query(query, values)

    res.status(201).json({
      message: "Producto creado correctamente",
      producto: result.rows[0]
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error creando producto" })
  }
}

// Actualizar producto
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, descripcion, precio, imagen, categoria } = req.body

    const query = `
      UPDATE products
      SET nombre=$1, descripcion=$2, precio=$3, imagen=$4, categoria=$5
      WHERE id=$6
      RETURNING *
    `
    const values = [nombre, descripcion, precio, imagen, categoria, id]

    const result = await pool.query(query, values)
    if (result.rows.length === 0) return res.status(404).json({ message: "Producto no encontrado" })

    res.json({
      message: "Producto actualizado correctamente",
      producto: result.rows[0]
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error actualizando producto" })
  }
}

// Eliminar producto
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const result = await pool.query(
      "DELETE FROM products WHERE id=$1 RETURNING *",
      [id]
    )
    if (result.rows.length === 0) return res.status(404).json({ message: "Producto no encontrado" })
    res.json({ message: "Producto eliminado correctamente", producto: result.rows[0] })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error eliminando producto" })
  }
}