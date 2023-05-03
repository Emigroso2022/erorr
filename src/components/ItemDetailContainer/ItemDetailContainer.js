import {useState, useEffect } from "react";
import {getProductById} from '../../data/asyncMock'
import ItemDetail from '../Itemdetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer =() =>{
    const [product, setProduct ]= useState(null)

    const{itemId} = useParams()

    useEffect(() =>{
        getProductById('itemId')
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