import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const getUserCartKey = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    return usuario ? `cart_${usuario.id}` : "cart_guest"
  }

  const loadCartFromStorage = () => {
    const cartKey = getUserCartKey()
    const savedCart = localStorage.getItem(cartKey)
    return savedCart ? JSON.parse(savedCart) : []
  }

  const [cart, setCart] = useState(loadCartFromStorage)

  // guardar carrito
  useEffect(() => {
    const cartKey = getUserCartKey()
    localStorage.setItem(cartKey, JSON.stringify(cart))
  }, [cart])

  // detectar cambio de usuario (login / logout)
  useEffect(() => {

    const handleStorageChange = () => {
      setCart(loadCartFromStorage())
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }

  }, [])

  const addToCart = (product) => {

    const existingProduct = cart.find((item) => item.id === product.id)

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)

    } else {

      setCart([...cart, { ...product, quantity: 1 }])

    }
  }

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
  }

  const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )

    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)

    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider