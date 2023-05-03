import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';

const NavBar =() =>{
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
               
               <NvarLink to ={'/category/Alimentos'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Alimentos</NvarLink>
               <NvarLink to ={'/category/Bazar'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Bazar</NvarLink>
               <NvarLink to ={'/category/Limpiza'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Limpieza</NvarLink>
               <NvarLink to ={'/category/Tecnologia'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}>Tecnologia</NvarLink>
            </div>
       <CartWidget/>
        </nav>
    )
}
export default NavBar