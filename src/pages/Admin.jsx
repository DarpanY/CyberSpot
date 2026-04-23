import { useEffect, useState } from "react"

function Admin() {

  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Smartphones")
  const [image, setImage] = useState("")
  const [preview, setPreview] = useState("")
  const [description, setDescription] = useState("")

  // 🔄 LOAD PRODUCTS FROM BACKEND
  const loadProducts = async () => {
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  // 📤 IMAGE UPLOAD (BASE64)
  const handleImageUpload = (e) => {
    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
      setPreview(reader.result)
    }

    reader.readAsDataURL(file)
  }

  // ➕ ADD PRODUCT
  const addProduct = async () => {

    if (!name || !price) {
      alert("Name and Price required")
      return
    }

    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        price: Number(price),
        category,
        image,
        description
      })
    })

    clearForm()
    loadProducts()
  }

  // ❌ DELETE PRODUCT
  const deleteProduct = async (id) => {

    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    })

    loadProducts()
  }

  // 🧹 CLEAR FORM
  const clearForm = () => {
    setName("")
    setPrice("")
    setCategory("Smartphones")
    setImage("")
    setPreview("")
    setDescription("")
  }

  return (
    <div style={{ padding: "40px" }}>

      <h1>Admin Dashboard</h1>

      {/* FORM */}
      <div style={{ marginBottom: "40px" }}>

        <input
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br /><br />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Smartphones</option>
          <option>Laptops</option>
          <option>PCComponents</option>
          <option>KeyboardMouse</option>
        </select>

        <br /><br />

        {/* IMAGE UPLOAD */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        <br /><br />

        {preview && (
          <img src={preview} width="150" />
        )}

        <br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br /><br />

        <button onClick={addProduct}>
          Add Product
        </button>

      </div>

      {/* PRODUCT LIST */}
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products yet</p>
      ) : (
        products.map(p => (
          <div
            key={p._id}
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              marginBottom: "15px"
            }}
          >

            <img src={p.image} width="80" />

            <div style={{ flex: 1 }}>
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
            </div>

            <button onClick={() => deleteProduct(p._id)}>
              Delete
            </button>

          </div>
        ))
      )}

    </div>
  )
}

export default Admin