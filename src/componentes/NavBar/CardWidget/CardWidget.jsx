import { Link } from "react-router-dom";

function CardWidget (){
    return(
        <li>
        <Link className="navbar-brand" to="/carrito">
        <img src="/imagen/carrito.png" height="50px" alt="./" />
        </Link>
        </li>
    );
}

export default CardWidget;