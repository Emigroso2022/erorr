const Item = ({ id, name, img, price, stock }) => {
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
                <p className="Info">Precio :${price}</p>
                <p className="Info">Stock Disponible: {stock}</p>
            </section>

            <footer className="ItemFooter">
           <link to={`/item/${id}}`}  className='Option'>Ver detalle </link>
            </footer>
            
        </article>
    )
}

export default Item