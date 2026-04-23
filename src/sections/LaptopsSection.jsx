import ProductCard from "../components/ProductCard"

function LaptopsSection({ products, addToCart }) {

  const items = products.filter(
    p => p.category === "Laptops"
  )

  return (
    <section className="section">

      <h2>Laptops</h2>

      <div className="section-row">

        {items.slice(0, 4).map(product => (
          <ProductCard
            key={product._id}
            product={product}
            addToCart={addToCart}
          />
        ))}

      </div>

    </section>
  )
}

export default LaptopsSection