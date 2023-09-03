import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/NavBar';
import classes from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <div className={classes.ContainerGeneral}>
          <div className={classes.ContainerArriba}>
            <div className={classes.Arriba}>
              <Navbar/>
            </div>      
          </div>
          <div className={classes.ContainerMedio}>
            <div className={classes.Texto}>
              <Routes> 
                <Route path= '/' element={<ItemListContainer greeting = "46 Soles Te da la Bienvenida!!!"/> }/>
                <Route path= '/category/:categoryId' element={<ItemListContainer greeting = "Productos Por Lineas"/> }/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              </Routes>   
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
) 

}

export default App

