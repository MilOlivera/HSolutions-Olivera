import './App.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';



const routes = createBrowserRouter(
  createRoutesFromElements(
  
  <Route element={<NavBar />}>
    <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS' />} />  
    <Route path='/category/:categoryid' element={<Category />} />
    <Route path='/item/:id' element={<ItemDetailContainer />} />
  </Route>
  
));

function App() {


  return (
    <>
   
            
            <RouterProvider router={routes}/>      
            
          
       
  
      
    </>
  )
}

export default App
