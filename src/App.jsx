import './App.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import {NavBar} from './components/NavBar/NavBar';
import {ItemDetail} from './pages/ItemDetail';
import {Category} from './pages/Category';
import {Home}  from './pages/Home';
import {Cart} from './pages/Cart';
import { CartProvider } from './state/Cart.context';



const routes = createBrowserRouter(
  createRoutesFromElements(
  <>

  <Route element={<NavBar />}>
    {" "}
    <Route path='/' element={<Home />} />  
    <Route path='/category/:id' element={<Category />} />
    <Route path='/item/:id' element={<ItemDetail />} />   
    <Route path='/cart' element={<Cart />} /> 
  </Route>


  
  </>
));

function App() {


  return (
    <>            
          <CartProvider>
            <RouterProvider router={routes}/>         
          </CartProvider>
    </>
  )
}

export default App
