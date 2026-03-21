import { Routes, Route } from "react-router-dom"
import Navbar from "./components/NavBar"
import Footer from "./components/footer"

import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Shop from "./pages/Shop"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"
import Profile from "./pages/Profile"
import CreateProduct from "./pages/CreateProduct";



function App() {
  return (
    <>
      <Navbar />

       <div className="main-content">

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/galeria" element={<Gallery />} />

        <Route path="/tienda" element={<Shop />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/carrito" element={<Cart />} />

        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/crear-producto" element={<CreateProduct />} />

      </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App