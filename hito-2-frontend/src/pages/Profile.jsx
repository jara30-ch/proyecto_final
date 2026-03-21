import { useEffect, useState } from "react"

const Profile = () => {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {

    const storedUser = localStorage.getItem("usuario")

    if (storedUser) {
      setUsuario(JSON.parse(storedUser))
    }

  }, [])

  if (!usuario) {
    return <h2 className="text-center mt-5">Cargando perfil...</h2>
  }

  return (

    <div className="container mt-5">

      <div className="card p-4 shadow">

        <h2 className="mb-4">Perfil de usuario</h2>

        <p><strong>Nombre:</strong> {usuario.nombre}</p>

        <p><strong>Email:</strong> {usuario.email}</p>

        <p><strong>Dirección:</strong> No especificada</p>

        <p><strong>Ciudad:</strong> No especificada</p>

        <p><strong>País:</strong> No especificado</p>

      </div>

    </div>

  )
}

export default Profile