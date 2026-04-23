import { useEffect, useState } from "react"
import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard"

function PCComponents({ addToCart }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const items = products.filter(
    p => p.category === "PCComponents"
  )

  return (
    <div>

      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        PC Components
      </h1>

      <div className="products-grid">
        {items.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  )
}

export default PCComponents