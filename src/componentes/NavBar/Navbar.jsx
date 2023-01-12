
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget/CardWidget";
import Navitem from "./Navitem";


function Navbar(){

    
    return(
        <>
        <nav className= "navbar navbar-dark bg-dark">
         <div className="container-fluid">
         <Navitem href="/"> LogoTIENDA </Navitem>
         <Link to='/category/remera'>Remera</Link>
        <Link to='/category/logo'>Logos</Link>
        <CardWidget height="50px" href="/carrito"></CardWidget>
                  
       </div>
        </nav>
        </>
    );
}

export default Navbar;