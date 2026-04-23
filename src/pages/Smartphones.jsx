import { useEffect, useState } from "react"
import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard"

function Smartphones({ addToCart }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const phones = products.filter(
    p => p.category === "Smartphones"
  )

  return (
    <div>

      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Smartphones
      </h1>

      <div className="products-grid">
        {phones.map(product => (
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

export default Smartphones