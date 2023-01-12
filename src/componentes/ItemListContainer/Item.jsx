
import { Link } from "react-router-dom";
import Button from "../Button/Button";



function Item(props) {
const{tittle,price,img,detail,id} = props.item;

return(
<>

    <div>
    <h3>{tittle}</h3>
    <br/>
    <img height="220px" src={img} alt="" />
    <h3>${price}</h3>
    <small>{detail}</small> 
    <Link to={`/detalle/${id}`}>

    <Button padding="8px 12px"  className="btn" text="Click Me" />
    </Link>
    </div>

</>
);
}
export default Item;
