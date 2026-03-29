import { useState, useEffect } from "react"
import CardProduct from "../components/CardProduct"
import { getProducts } from "../services/api"

const Home = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {

    const loadProducts = async () => {

      const data = await getProducts()

      setProductList(data)

    }

    loadProducts()

  }, [])

  const featuredProducts = productList.slice(0, 2)

  return (
    <div>
      {/* HERO */}
      <div
        className="bg-light text-center p-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1596464716127-f2a82984de30)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white"
        }}
      >

        <div className="container">

          <h1 className="display-4 fw-bold">
            Bienvenido a la Juguetería
          </h1>

          <p className="lead">
            Los mejores juguetes para aprender y divertirse
          </p>

          <Link to="/tienda" className="btn btn-warning btn-lg">
            Ver tienda
          </Link>

        </div>

      </div>

      {/* PRODUCTOS */}

      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Productos Destacados
        </h2>

        <div className="d-flex justify-content-center flex-wrap">

          {featuredProducts.map((product) => (

            <CardProduct
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </div>
  )
}

export default Home