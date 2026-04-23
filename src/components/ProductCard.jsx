import { useNavigate } from "react-router-dom"
import "../styles/product.css"

function ProductCard({ product, addToCart }) {

  const navigate = useNavigate()

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product._id}`)}
    >

      <img src={product.image} />

      <h3>{product.name}</h3>
      <h5>{product.description}</h5>
      <p>₹{product.price}</p>

      <button
        onClick={(e) => {
          e.stopPropagation()
          addToCart(product)
        }}
      >
        Add To Cart
      </button>

    </div>
  )
}

export default ProductCard