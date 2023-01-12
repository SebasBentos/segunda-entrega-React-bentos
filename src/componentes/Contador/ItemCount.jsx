import React, {useState}from "react";

function ItemCount(props){

    const [ count, setCount] = useState(1);
    
    function handleSuma() 
    {setCount(count+1);}

    function handleResta() {setCount(count-1);}

    return(
    
        <div style={{ display:"flex", border:"solid 1px black", padding:"15px" }}>
            Agregar al carrito
            <button disabled={count === 0} onClick={handleResta}>-
            </button>
            <p>{count}</p>
            <button  disabled={count === props.stock}  onClick={handleSuma}>+
            </button>
            <button>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;