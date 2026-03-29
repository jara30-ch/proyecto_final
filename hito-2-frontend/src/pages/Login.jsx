import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { loginUser } from "../services/api"

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await loginUser(formData)

      console.log(response)

      // guardar token
      localStorage.setItem("token", response.token)

      // guardar usuario
      localStorage.setItem("usuario", JSON.stringify(response.usuario))
      window.dispatchEvent(new Event("userChanged"))

      // cargar carrito del usuario si existe
const savedCart = localStorage.getItem(`cart_${response.usuario.id}`)

      alert("Login exitoso")

      navigate("/profile")

    } catch (error) {

      console.error(error)

      alert("Error al iniciar sesión")

    }

  }

  return (

    <div className="container mt-5 d-flex justify-content-center">

      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>

        <h2 className="text-center mb-4">Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Ingresa tu email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Iniciar sesión
          </button>

        </form>

        <div className="text-center mt-4">

          <p>¿No tienes cuenta?</p>

          <Link to="/register" className="btn btn-outline-secondary w-100">
            Registrarse
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Login