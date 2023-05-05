const products = [

    {
        id: '1',
        name: 'Limpieza',
        price: 500,
        category: 'Limpieza',
        img: 'https://images.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.100.jpg',
        stock: 25,
        description: 'Lavandina en gel',
    },

    { id: '2', name: 'Bazar', price: 580, category: 'ayudin', img: 'https://images.openfoodfacts.org/images/products/073/762/806/4502/nutrition_en.12.100.jpg' },
    { id: '3', name: 'Alimientos', price: 58, category: 'ayudin', img: 'https://images.openfoodfacts.org/images/products/073/762/806/4502/nutrition_en.12.100.jpg' }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)

    })
}



