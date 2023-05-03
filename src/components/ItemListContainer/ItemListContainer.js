import { useState ,useEffect } from "react"
import {getProducts} from '../../data/asyncMock';
import ItemList from "../ItemList/ItemList.js"
import getProductById from "../../data/asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer= ({ greeting }) =>{

const [products, setProducts ]= useState([])

const {categorId} = useParams()
useEffect(() =>{
    
    const asybcFunc = categorId? getProductByCategory : getProducts
asyncFunc(categorId)

    .then(response =>{
        setProducts(response)

    })
    .catch(error =>{
        console.error(error)
    })
},[categorId])

return(
    <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </div>
)
}
export default ItemListContainer