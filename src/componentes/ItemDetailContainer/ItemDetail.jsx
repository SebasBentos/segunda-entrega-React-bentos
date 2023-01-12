import React from 'react'
import ItemCount from '../Contador/ItemCount'
import './itemDetail.css';
function ItemDetail({tittle, img, price, detail}) {
  return (
    <>

    <div>
    <h3>{tittle}</h3>
    <br/>
    <img height="220px" src={img} alt="" />
    <h3>${price}</h3>
    <small>{detail}</small>
    <ItemCount stock={7} />
    </div>

</>
  )
}

export default ItemDetail