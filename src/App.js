import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './componentes/pages/HomePage';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
  return (
  <>
 <BrowserRouter>
 <Navbar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
  <Route path="/category/:categoryid" element={<ItemListContainer />} />
  <Route path='*' element={ <h2>Pagina no encontrada</h2>}/>
</Routes>
</BrowserRouter>
  </>
    
);
}

export default App;
