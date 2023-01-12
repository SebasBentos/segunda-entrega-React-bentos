import {useState, useEffect} from "react";
import obtenerProductos, { byCategory } from "../../service/mockService";
import Item from "./Item";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";




function ItemListContainer(){
 const [producto, setProducto] = useState([]);
 let {categoryid} = useParams();

 

useEffect(()=>{

  if (!categoryid){
  obtenerProductos().then((respuesta)=>{
    setProducto(respuesta);
  });}
else
{
  byCategory(categoryid)
  .then((respuesta)=>{
    setProducto(respuesta);
})

}
},[categoryid]);



return(
  <>
  <Flex>
     {
      producto.map((ItemItinerado)=>{
      return <Item key={ItemItinerado.id} id={ItemItinerado.id} 
        item={ItemItinerado}
        />;}
      )
      }
    </Flex>
  </>
);

}
 export default ItemListContainer;