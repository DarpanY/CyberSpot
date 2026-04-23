import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../data/products"

function ProductPage({ addToCart }) {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getProducts().then(data => {
      const found = data.find(p => p._id === id)
      setProduct(found)
    })
  }, [id])

  if (!product) return <h2>Loading...</h2>

  return (
    <div className="product-page">

      <img src={product.image} width="300" />

      <h1>{product.name}</h1>

      <p>₹{product.price}</p>

      <p>{product.description}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

    </div>
  )
}

export default ProductPage