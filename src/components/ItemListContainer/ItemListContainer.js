import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from "../ItemList/ItemList.js"
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    //llamo a la funcion Get Product para traer los productos
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response) //EL array de productos lo gusrdo en este estado 

            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer