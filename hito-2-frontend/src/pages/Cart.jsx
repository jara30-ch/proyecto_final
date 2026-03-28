import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useContext(CartContext)

  return (

    <div className="mt-4 container">

      <h2>Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((item) => (

            <div
              key={item.id}
              className="d-flex align-items-center border p-3 mb-3"
            >

              <img
                src={item.image}
                alt={item.name}
                width="80"
                className="me-3"
              />

              <div className="flex-grow-1">

                <h5>{item.name}</h5>

                <p>${Number(item.price).toLocaleString("es-CL")}</p>

              </div>

              <div className="d-flex align-items-center">

                <button
                  className="btn btn-secondary"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span className="mx-3">{item.quantity}</span>

                <button
                  className="btn btn-secondary"
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

          <h3>Total: ${Number(totalPrice).toLocaleString("es-CL")}</h3>

        </>
      )}

    </div>
  )
}

export default Cart