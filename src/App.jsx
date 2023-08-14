import './App.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import {NavBar} from './components/NavBar/NavBar';
import {ItemDetail} from './pages/ItemDetail';
import {Category} from './pages/Category';
// import Form from './components/Formulario/Formulario'
import {Home}  from './pages/Home';
import {Cart} from './pages/Cart';



const routes = createBrowserRouter(
  createRoutesFromElements(
  <>

  <Route element={<NavBar />}>
    {" "}
    <Route path='/' element={<Home />} />  
    <Route path='/category/:categoryid' element={<Category />} />
    <Route path='/item/:id' element={<ItemDetail />} />    
  </Route>

  {/* <Route path='/form' element={<Form />}/> */}
  <Route path='/cart' element={<Cart />} />

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
