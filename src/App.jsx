
import './App.css'
// import Home from './components/Home';
import ItemCount from './components/ItemCount'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


const routes = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS' />} />  
    <Route path='/category/:categoryid' element={<ItemListContainer greeting='BIENVENIDOS'/>} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
  </>
));

function App() {


  return (
    <>
   
            
            <RouterProvider router={routes}/>      
            
          
       
  
      
    </>
  )
}

export default App
