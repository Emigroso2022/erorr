import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Routes path='/' element={<ItemListContainer  greeting={'Bienvenidos'}/>}/>
        <Routes path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Routes path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Routes path='/' element={<ItemListContainer/>}/>
        <Routes path='/ItemCount/'  element ={<ItemCount initial={1} stock={10} onAdd={(quantity) =>console.log('Cantidad agregada',quantity)/>
        <Routes path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    
      </BrowserRouter>

    
    </div>


  );
}

export default App;
