import { useState, useEffect } from "react";
import {getproductById} from '../../asyncMock';
import ItemDetail from '../Itemdetail/ItemDetail'

const ItemDetailContainer =() =>{
    const [product, setProduct ]= useState(null)

    useEffect(() =>{
        getproductById('1')
        .then(response =>{
            setProduct(response)
    
        })
        .catch(error =>{
            console.error(error)
        })
    },[])
    
    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContainer