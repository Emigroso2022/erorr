const Item = ({ id, name, img, category , description ,price, stock }) => {
    
    return (
        <article className="CadItem">
            <header className="Headere">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Categoria :${category}</p>
                <p className="Info">Descripcion :${description}</p>
                <p className="Info">Precio :${price}</p>
                <p className="Info">Stock : {stock}</p>
            </section>

            <footer className="ItemFooter">
           <ItemCount initial={1} stock={stock} onAdd={(quantity) =>console.log('Cantidad agregada' )}/>
            </footer>
            
        </article>
    )
}

export default Item