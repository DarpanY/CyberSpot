import {Link} from "react-router-dom"
import "../styles/navbar.css"

function Navbar({cart}){

return(

<header className="navbar">

<Link to="/" className="logo">CyberSpot</Link>

<div className="search">

<input placeholder="Search products"/>

</div>

<nav>

<Link to="/" className="nav-link">Home</Link>

<Link to="/cart" className="nav-link"> Cart
<span className="cart-count" >{cart.length}</span>

</Link>

<Link to="/wishlist" className="nav-link">Wishlist</Link>

</nav>

</header>

)

}

export default Navbar