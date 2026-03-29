import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Checkout = () => {

  const { cart, totalPrice, clearCart } = useContext(CartContext)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: ""
  })

  const [error, setError] = useState("")
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [orderNumber, setOrderNumber] = useState(null)

  const shipping = 2990
  const finalTotal = totalPrice + shipping

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handlePurchase = () => {

    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.city
    ) {
      setError("Debes completar todos los datos antes de confirmar la compra.")
      return
    }

    setError("")

    const generatedOrder = Math.floor(Math.random() * 1000000)

    setOrderNumber(generatedOrder)
    setOrderCompleted(true)

    clearCart()
  }

  if (orderCompleted) {

    return (

      <div className="container mt-5 text-center">

        <h2 className="text-success mb-3">
          Compra realizada con éxito
        </h2>

        <p>Tu número de orden es:</p>

        <h3 className="mb-4">
          #{orderNumber}
        </h3>

        <Link to="/tienda" className="btn btn-primary">
          Volver a la tienda
        </Link>

      </div>
    )
  }

  return (

    <div className="container mt-5">

      <h2 className="mb-4">Checkout</h2>

      <div className="row">

        <div className="col-md-6">

          <h4>Datos de envío</h4>

          <form>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Ciudad</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

          </form>

        </div>

        <div className="col-md-6">

          <div className="border p-4 rounded shadow-sm">

            <h4>Resumen</h4>

            {cart.map((item) => (

              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >

                <span>
                  {item.name} x {item.quantity}
                </span>

                <span>
                  ${(item.price * item.quantity).toLocaleString("es-CL")}
                </span>

              </div>

            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${totalPrice.toLocaleString("es-CL")}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Envío</span>
              <span>${shipping.toLocaleString("es-CL")}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">

              <strong>Total</strong>

              <strong>
                ${finalTotal.toLocaleString("es-CL")}
              </strong>

            </div>

            {error && (
              <div className="alert alert-danger mt-3">
                {error}
              </div>
            )}

            <button
              onClick={handlePurchase}
              className="btn btn-success w-100 mt-3"
            >
              Confirmar compra
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout