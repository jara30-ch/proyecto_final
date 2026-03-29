import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useContext(CartContext)

  const shipping = totalPrice > 0 ? 2990 : 0
  const finalTotal = totalPrice + shipping

  return (

    <div className="container mt-5">

      <h2 className="mb-4">Carrito de compras</h2>

      {cart.length === 0 ? (

        <div className="text-center">

          <h4>Tu carrito está vacío</h4>

          <Link to="/tienda" className="btn btn-primary mt-3">
            Ir a la tienda
          </Link>

        </div>

      ) : (

        <div className="row">

          {/* LISTA PRODUCTOS */}

          <div className="col-md-8">

            {cart.map((item) => (

              <div
                key={item.id}
                className="d-flex align-items-center border rounded p-3 mb-3"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  width="80"
                  className="me-3"
                />

                <div className="flex-grow-1">

                  <h5>{item.name}</h5>

                  <p className="mb-1">
                    Precio: ${Number(item.price).toLocaleString("es-CL")}
                  </p>

                  <p className="mb-1">
                    Subtotal: ${(item.price * item.quantity).toLocaleString("es-CL")}
                  </p>

                </div>

                <div className="d-flex align-items-center">

                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>

                  <span className="mx-3">{item.quantity}</span>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>

                </div>

                <button
                  className="btn btn-danger ms-3"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>

              </div>

            ))}

          </div>

          {/* RESUMEN COMPRA */}

          <div className="col-md-4">

            <div className="border rounded p-4 shadow-sm">

              <h4 className="mb-3">Resumen de compra</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toLocaleString("es-CL")}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Envío</span>
                <span>${shipping.toLocaleString("es-CL")}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-3">

                <strong>Total</strong>

                <strong>
                  ${finalTotal.toLocaleString("es-CL")}
                </strong>

              </div>

              <Link to="/checkout" className="btn btn-success w-100 mb-2">
  Ir a pagar
</Link>

              <Link to="/shop" className="btn btn-outline-dark w-100">
                Seguir comprando
              </Link>

            </div>

          </div>

        </div>

      )}

    </div>

  )
}

export default Cart