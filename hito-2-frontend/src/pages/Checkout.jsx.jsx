import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Checkout = () => {

  const { cart, totalPrice } = useContext(CartContext)

  const shipping = 2990
  const finalTotal = totalPrice + shipping

  return (

    <div className="container mt-5">

      <h2 className="mb-4">Checkout</h2>

      <div className="row">

        <div className="col-md-6">

          <h4>Datos de envío</h4>

          <form>

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input type="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Dirección</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Ciudad</label>
              <input type="text" className="form-control" />
            </div>

          </form>

        </div>

        <div className="col-md-6">

          <div className="border p-4 rounded">

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

            <button className="btn btn-success w-100 mt-3">
              Confirmar compra
            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Checkout