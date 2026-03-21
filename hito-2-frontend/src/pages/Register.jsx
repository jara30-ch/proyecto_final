import { Link } from "react-router-dom"
import { useState } from "react"
import { registerUser } from "../services/api"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    pais: "",
    ciudad: "",
    password: "",
    confirmPassword: ""
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

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    try {

      const userData = {
  nombre: formData.nombre,
  email: formData.email,
  password: formData.password
}

      const response = await registerUser(userData)

      alert("Usuario registrado correctamente")

      console.log(response)

      navigate("/login")

      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        pais: "",
        ciudad: "",
        password: "",
        confirmPassword: ""
      })

    } catch (error) {

      console.error(error)
      alert("Error al registrar usuario")

    }

  }

  return (

    <div className="container mt-5 d-flex justify-content-center">

      <div className="card p-4 shadow" style={{ maxWidth: "700px", width: "100%" }}>

        <h2 className="text-center mb-4">Crear cuenta</h2>

        <form onSubmit={handleSubmit}>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                name="apellido"
                className="form-control"
                value={formData.apellido}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
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
              name="direccion"
              className="form-control"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">País</label>
              <input
                type="text"
                name="pais"
                className="form-control"
                value={formData.pais}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Ciudad</label>
              <input
                type="text"
                name="ciudad"
                className="form-control"
                value={formData.ciudad}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Repetir contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

          </div>

          <button className="btn btn-primary w-100 mt-3">
            Registrarte
          </button>

        </form>

        <div className="text-center mt-4">

          <p>¿Ya tienes una cuenta?</p>

          <Link to="/login" className="btn btn-outline-secondary w-100">
            Iniciar sesión
          </Link>

        </div>

      </div>

    </div>

  )
}

export default Register