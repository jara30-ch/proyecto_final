import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  createProduct,
  getCategories,
  getProductById,
  updateProduct,
  deleteProduct
} from "../services/api"

const CreateProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()  // Si hay id, es edición

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",       // categoría seleccionada o vacía
    categoriaNueva: "",  // categoría nueva si se quiere crear
    imagen: ""
  })

  const [categorias, setCategorias] = useState([])  // Lista de categorías existentes
  const [editing, setEditing] = useState(false)

  // Cargar categorías
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const cats = await getCategories()
        setCategorias(cats)
      } catch (error) {
        console.error("Error cargando categorías:", error)
      }
    }
    loadCategories()
  }, [])

  // Cargar producto para edición si existe id
  useEffect(() => {
    if (id) {
      const loadProduct = async () => {
        try {
          const product = await getProductById(id)
          setFormData({
            nombre: product.nombre,
            descripcion: product.descripcion,
            precio: product.precio,
            categoria: product.categoria || "",
            categoriaNueva: "",
            imagen: product.imagen
          })
          setEditing(true)
        } catch (error) {
          console.error("Error cargando producto:", error)
        }
      }
      loadProduct()
    }
  }, [id])

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Guardar o actualizar producto
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Elegir categoría correcta
      const categoriaFinal = formData.categoria === "nueva" ? formData.categoriaNueva : formData.categoria

      const productData = {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        precio: Number(formData.precio),
        categoria: categoriaFinal,
        imagen: formData.imagen
      }

      if (editing) {
        await updateProduct(id, productData)
        alert("Producto actualizado correctamente")
      } else {
        await createProduct(productData)
        alert("Producto creado correctamente")
      }

      navigate("/tienda")
    } catch (error) {
      console.error(error)
      alert("Error al guardar el producto")
    }
  }

  // Eliminar producto
  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return
    try {
      await deleteProduct(id)
      alert("Producto eliminado")
      navigate("/tienda")
    } catch (error) {
      console.error(error)
      alert("Error al eliminar el producto")
    }
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <h2 className="text-center mb-4">{editing ? "Editar Producto" : "Crear Producto"}</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              name="descripcion"
              className="form-control"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              type="number"
              name="precio"
              className="form-control"
              value={formData.precio}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Categoría</label>
            <select
              name="categoria"
              className="form-control"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map(cat => (
                <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
              ))}
              <option value="nueva">Agregar nueva categoría</option>
            </select>

            {formData.categoria === "nueva" && (
              <input
                type="text"
                name="categoriaNueva"
                className="form-control mt-2"
                placeholder="Nombre nueva categoría"
                value={formData.categoriaNueva}
                onChange={handleChange}
                required
              />
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Imagen (URL)</label>
            <input
              type="text"
              name="imagen"
              className="form-control"
              value={formData.imagen}
              onChange={handleChange}
              placeholder="Ej: https://images.unsplash.com/photo-12345"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            {editing ? "Actualizar Producto" : "Crear Producto"}
          </button>

          {editing && (
            <button
              type="button"
              className="btn btn-danger w-100 mt-2"
              onClick={handleDelete}
            >
              Eliminar Producto
            </button>
          )}

        </form>
      </div>
    </div>
  )
}

export default CreateProduct