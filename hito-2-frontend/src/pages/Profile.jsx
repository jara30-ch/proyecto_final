import { useEffect, useState, useContext } from "react"
import { LikesContext } from "../context/LikesContext"
import CardProduct from "../components/CardProduct"

const Profile = () => {

  const [usuario, setUsuario] = useState(null)

  const { likes } = useContext(LikesContext)

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

      <div className="card p-4 shadow mb-4">

        <h2 className="mb-4">Perfil de usuario</h2>

        <p><strong>Nombre:</strong> {usuario.nombre}</p>

        <p><strong>Email:</strong> {usuario.email}</p>

        <p><strong>Dirección:</strong> No especificada</p>

        <p><strong>Ciudad:</strong> No especificada</p>

        <p><strong>País:</strong> No especificado</p>

      </div>

      <div>

        <h3 className="mb-3">

          Productos que te gustaron ❤️ ({likes.length})

        </h3>

        <div className="d-flex flex-wrap justify-content-center">

          {likes.length === 0 ? (

            <p>Aún no has dado like a productos</p>

          ) : (

            likes.map(product => (

              <CardProduct
                key={product.id}
                product={product}
              />

            ))

          )}

        </div>

      </div>

    </div>
  )
}

export default Profile