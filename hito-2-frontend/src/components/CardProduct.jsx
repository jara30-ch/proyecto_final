import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CardProduct = ({ product }) => {

  const { addToCart } = useContext(CartContext)

  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  // compatibilidad backend / json
  const nombre = product.nombre || product.name
  const imagen = product.imagen || product.image
  const precio = Number(product.precio || product.price || 0)
  const categoria = product.category || product.categoria || "Sin categoría"

  return (

    <div className="card m-3" style={{ width: "18rem" }}>

      <img
        src={imagen}
        className="card-img-top"
        alt={nombre}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h5>{nombre}</h5>

        <span className="badge bg-secondary mb-2">
          {categoria}
        </span>

        <p>${precio.toLocaleString("es-CL")}</p>

        <div
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={handleLike}
        >
          <span
            style={{
              color: liked ? "red" : "gray",
              fontSize: "1.3rem",
              marginRight: "5px"
            }}
          >
            ♥
          </span>
        </div>

        <div className="d-flex gap-2">

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>

          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-dark"
          >
            Ver detalle
          </Link>

        </div>

      </div>

    </div>
  )
}

export default CardProduct