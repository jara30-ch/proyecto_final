import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { LikesProvider } from "./context/LikesContext"

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <CartProvider>

      <LikesProvider>

        <App />

      </LikesProvider>

    </CartProvider>

  </BrowserRouter>

)