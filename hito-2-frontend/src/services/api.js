const API_URL = "http://localhost:3000/api"

// --------------------- Productos ---------------------

// Obtener todos los productos
export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`)
  if (!res.ok) throw new Error("Error al cargar productos")
  return res.json()
}

// Obtener producto por id
export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`)
  if (!res.ok) throw new Error("Error al obtener producto")
  return res.json()
}

// Crear un producto
export const createProduct = async (productData) => {
  const token = localStorage.getItem("token")  // Token admin
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` })
    },
    body: JSON.stringify(productData)
  })
  if (!res.ok) throw new Error("Error al crear el producto")
  return res.json()
}

// Actualizar producto
export const updateProduct = async (id, productData) => {
  const token = localStorage.getItem("token")
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token && { "Authorization": `Bearer ${token}` })
    },
    body: JSON.stringify(productData)
  })
  if (!res.ok) throw new Error("Error al actualizar producto")
  return res.json()
}

// Eliminar producto
export const deleteProduct = async (id) => {
  const token = localStorage.getItem("token")
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
    headers: {
      ...(token && { "Authorization": `Bearer ${token}` })
    }
  })
  if (!res.ok) throw new Error("Error al eliminar producto")
  return res.json()
}

// --------------------- Categorías ---------------------

// Obtener todas las categorías
export const getCategories = async () => {
  const res = await fetch(`${API_URL}/categories`)
  if (!res.ok) throw new Error("Error al cargar categorías")
  return res.json()
}

// --------------------- Usuarios ---------------------

// Registrar usuario
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
  if (!res.ok) throw new Error("Error al registrar usuario")
  return res.json()
}

// Login
export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  })
  if (!res.ok) throw new Error("Error al hacer login")
  return res.json()
}