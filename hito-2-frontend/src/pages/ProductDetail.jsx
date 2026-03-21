import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductById, deleteProduct } from "../services/api"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [liked, setLiked] = useState(false)
  const [usuario, setUsuario] = useState(null)

  const handleLike = () => {
    setLiked(!liked)
  }

  useEffect(() => {
    // Traer usuario del localStorage para saber si es admin
    const storedUser = localStorage.getItem("usuario")
    if (storedUser) setUsuario(JSON.parse(storedUser))
  }, [])

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (error) {
        console.error("Error cargando producto:", error)
      }
    }
    loadProduct()
  }, [id])

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

  const handleAddToCart = () => {
    if (!product) return
    // Aquí asumo que tienes un contexto de carrito; si no, puedes agregar lógica simple
    alert("Producto agregado al carrito")
  }

  if (!product) {
    return <h2 className="text-center mt-5">Cargando producto...</h2>
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.nombre}</h2>

          <span
            onClick={handleLike}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              color: liked ? "red" : "gray"
            }}
          >
            ♥
          </span>

          <br />

          <span className="badge bg-secondary mb-3">
            {product.categoria || "SIN CATEGORÍA"}
          </span>

          <p className="mt-3">
            {product.descripcion || "SIN DESCRIPCIÓN"}
          </p>

          <h4 className="fw-bold">
            ${Number(product.precio).toLocaleString("es-CL")}
          </h4>

          {usuario && usuario.rol === "admin" ? (
            <>
              <button
                className="btn btn-warning me-2"
                onClick={() => navigate(`/crear-producto/${id}`)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Eliminar
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary mt-3"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail