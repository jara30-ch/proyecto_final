import { useState, useEffect } from "react"
import CardProduct from "../components/CardProduct"
import { getProducts } from "../services/api"

const Shop = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {

    const loadProducts = async () => {

      const data = await getProducts()

      setProductList(data)

    }

    loadProducts()

  }, [])

  return (

    <div className="mt-4">

      <h1 className="text-center mb-4">
        Tienda de Juguetes
      </h1>

      <div className="d-flex flex-wrap justify-content-center">

        {productList.map((product) => (

          <CardProduct
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  )
}

export default Shop