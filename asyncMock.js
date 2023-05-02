const products= [
    {
        id:'1',
        name: 'Lavandina',
        price: 500,
        category:'Limpieza',
        img:'https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.100.jpg',
        stock:25,
        description:'Lavandina en gel'
    },

    {id:'2',name:'sanga',price:580,category:'ayudin',img:'https://images.openfoodfacts.org/images/products/073/762/806/4502/nutrition_en.12.100.jpg'},
    {id:'3',name:'sanga',price:58,category:'ayudin',img:'https://images.openfoodfacts.org/images/products/073/762/806/4502/nutrition_en.12.100.jpg'}
]
export const getproductById =(productId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)

    })
}


