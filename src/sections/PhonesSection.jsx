import ProductCard from "../components/ProductCard"

function PhonesSection({ products, addToCart }) {

  const phones = products.filter(
    p => p.category === "Smartphones"
  )

  return (
    <section className="section">

      <h2>Phones</h2>

      <div className="section-row">

        {phones.slice(0, 4).map(product => (
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

export default PhonesSection