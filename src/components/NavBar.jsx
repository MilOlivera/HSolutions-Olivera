import CartWidget from './CartWidget'
import '../../public/css/NavBar.css'
import { NavLink, Outlet } from 'react-router-dom'



// HAY QUE MODIFICAR TODOS LOS NAVLINKS CON LOS A YA QUE EL NAVLINK TE GENERA ETIQUETAS <A>.
// TAMBIEN HAY QUE MODIFICAR LOS ESTILOS PARA QUE QUEDE BIEN COMO ESTABA ANTES

const NavBar = () => {


return (
            <>
                <div>
                    <div>

                            <ul>
                                <span><CartWidget /></span>        
                            </ul>
                      
                        <div>
                            <h1 className='NavBarH1'><NavLink to={'/'} style={{textDecoration:'none', color:'white'}}>HARD SOLUTIONS </NavLink></h1>
                        <div>
	                        <nav>
                                <NavLink to={'/category/1'}>Ropa</NavLink>
                                <NavLink to={'/category/2'}>Electronicos</NavLink>
                                <NavLink to={'/category/3'}>Muebles</NavLink>
                                <NavLink to={'/category/4'}>Zapatos</NavLink>
                                <NavLink to={'/category/5'}>Otros</NavLink>
                                <div className="animation start-home"></div>
                            </nav>
                         
	                       
                         </div>       
                            

                        </div>
                    </div>
                </div>    
                <Outlet/>
            </>
    )
}


export default NavBar;


