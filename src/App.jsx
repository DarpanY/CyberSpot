import {BrowserRouter,Routes,Route} from "react-router-dom"
import {useState} from "react"
import Navbar from "./components/Navbar"
import Admin from "./pages/Admin"
import Home from "./pages/Home"
import Smartphones from "./pages/Smartphones"
import Laptops from "./pages/Laptops"
import PCComponents from "./pages/PCComponents"
import KeyboardMouse from "./pages/KeyboardMouse"
import ProductPage from "./pages/ProductPage"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import Categories from "./components/Categories"

function App(){

const [cart,setCart] = useState([])
const [wishlist,setWishlist] = useState([])

const addToCart = (product)=>{

const exist = cart.find(i=>i.id===product.id)

if(exist){

setCart(cart.map(i =>
i.id===product.id
? {...i,qty:i.qty+1}
: i
))

}else{

setCart([...cart,{...product,qty:1}])

}

}

const increaseQty = id =>{

setCart(cart.map(i =>
i.id===id
? {...i,qty:i.qty+1}
: i
))

}

const decreaseQty = id =>{

setCart(cart.map(i =>
i.id===id && i.qty>1
? {...i,qty:i.qty-1}
: i
))

}

return(

<BrowserRouter>
<Navbar cart={cart}/>
<Categories/>


<Routes>

<Route path="/" element={<Home addToCart={addToCart} cart={cart}/>}/>

<Route path="/smartphones" element={<Smartphones addToCart={addToCart} cart={cart}/>}/>

<Route path="/laptops" element={<Laptops addToCart={addToCart}/>}/>

<Route path="/pc-components" element={<PCComponents addToCart={addToCart}/>}/>

<Route path="/keyboard-mouse" element={<KeyboardMouse addToCart={addToCart}/>}/>

<Route path="/product/:id" element={<ProductPage addToCart={addToCart}/>}/>

<Route path="/cart" element={<Cart cart={cart} increaseQty={increaseQty} decreaseQty={decreaseQty} setCart={setCart}/>}/>

<Route path="/wishlist" element={<Wishlist wishlist={wishlist}/>}/>

<Route path="/admin" element={<Admin/>} />

</Routes>

</BrowserRouter>

)

}

export default App