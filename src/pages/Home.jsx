import { useEffect, useState } from "react"
import { getProducts } from "../data/products"

import Hero from "../components/Hero"
import PhonesSection from "../sections/PhonesSection"
import LaptopsSection from "../sections/LaptopsSection"
import AccessoriesSection from "../sections/AccessoriesSection"
import Footer from "../components/Footer"

function Home({ addToCart }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div>

      <Hero />

      <PhonesSection products={products} addToCart={addToCart} />
      <LaptopsSection products={products} addToCart={addToCart} />
      <AccessoriesSection products={products} addToCart={addToCart} />

      <Footer />

    </div>
  )
}

export default Home