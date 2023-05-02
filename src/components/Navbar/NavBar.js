import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar =() =>{
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <Button>Promociones Online</Button>
                <Button>Hogar & Electro</Button>
                <Button>Servicios</Button>
                
            </div>
       <CartWidget/>
        </nav>
    )
}
export default NavBar