import "../styles/cart.css"
function Cart({ cart, increaseQty, decreaseQty, setCart }) {

  const removeItem = (id) => {
    const filtered = cart.filter(item => item.id !== id)
    setCart(filtered)
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cart.map(item => (
        <div key={item.id} className="cart-item">

          <img src={item.image} width="100" />

          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>

        </div>
      ))}

      <h2>Total: ₹{total}</h2>

    </div>
  )
}

export default Cart