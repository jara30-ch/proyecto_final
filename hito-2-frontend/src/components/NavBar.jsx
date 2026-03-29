import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

 const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate()
  const location = useLocation()

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    const storedUser = localStorage.getItem("usuario")

    if (storedUser) {
      setUsuario(JSON.parse(storedUser))
    } else {
      setUsuario(null)
    }

  }, [location])   // ← IMPORTANTE

  const handleLogout = () => {

  clearCart()

  localStorage.removeItem("token")
  localStorage.removeItem("usuario")

   window.dispatchEvent(new Event("userChanged"))

  setUsuario(null)

  navigate("/")

}

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Juguetería
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/galeria">
            Galería
          </Link>

          <Link className="nav-link" to="/tienda">
            Tienda
          </Link>

          {!usuario && (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>

              <Link className="nav-link" to="/register">
                Registro
              </Link>
            </>
          )}

          {usuario && (
  <>
    <Link className="nav-link" to="/profile">
      👤 {usuario.nombre}
    </Link>

    {usuario.rol === "admin" && (
      <Link className="nav-link" to="/crear-producto">
        Crear Producto
      </Link>
    )}

    <button
      className="nav-link btn btn-link text-white"
      onClick={handleLogout}
      style={{ textDecoration: "none" }}
    >
      Logout
    </button>
  </>
)}

          <Link className="nav-link" to="/carrito">
            🛒 Carrito ({totalItems})
          </Link>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;