// 🔹 GET ALL PRODUCTS
export async function getProducts() {
  const res = await fetch("http://localhost:5000/products")
  return await res.json()
}

// 🔹 ADD PRODUCT
export async function addProduct(product) {
  const res = await fetch("http://localhost:5000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })

  return await res.json()
}

// 🔹 DELETE PRODUCT
export async function deleteProduct(id) {
  await fetch(`http://localhost:5000/products/${id}`, {
    method: "DELETE"
  })
}

// 🔹 UPDATE PRODUCT (optional for future)
export async function updateProduct(id, updatedData) {
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedData)
  })

  return await res.json()
}