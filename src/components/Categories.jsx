import {Link} from "react-router-dom"
import "../styles/categories.css"

function Categories(){

return(

<div className="categories">

<Link to="/smartphones">Smartphones</Link>

<Link to="/laptops">Laptops</Link>

<Link to="/pc-components">PC Components</Link>

<Link to="/keyboard-mouse">Keyboard & Mouse</Link>

</div>

)

}

export default Categories