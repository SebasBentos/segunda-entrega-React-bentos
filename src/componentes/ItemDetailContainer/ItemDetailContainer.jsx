import React, {useState, useEffect} from 'react'
import { obtenerProduct } from '../../service/mockService';
import ItemDetail from './ItemDetail';
import './itemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [Product, setProduct] = useState([]);
     let params = useParams(); 
     console.log(params); 

    useEffect(()=>{
      obtenerProduct(params.itemid).then((respuesta)=>{
        setProduct(respuesta)
      })
      .catch((error)=> alert(error));
    },[])
    
    
    
    return(
        <ItemDetail
         titte={Product.titte}
         img={Product.img}
         price={Product.price} 
         detail={Product.detail}/>
     );
}

export default ItemDetailContainer