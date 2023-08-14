import {CartWidget} from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink, Outlet } from 'react-router-dom'



// HAY QUE MODIFICAR TODOS LOS NAVLINKS CON LOS A YA QUE EL NAVLINK TE GENERA ETIQUETAS <A>.
// TAMBIEN HAY QUE MODIFICAR LOS ESTILOS PARA QUE QUEDE BIEN COMO ESTABA ANTES

export const NavBar = () => {


return (
            <>
                <div>
                    <div>

                          
                      
                        <div>
                            <h1 className='NavBarH1'><NavLink to={'/'} style={{textDecoration:'none', color:'white'}}>HARD SOLUTIONS </NavLink></h1>
                        <div>
	                        <nav>
                                <NavLink to={'/category/consolas'}>Consolas</NavLink>
                                <NavLink to={'/category/componentes'}>Componentes</NavLink>
                                <NavLink to={'/category/notebooks'}>Notebooks</NavLink>
                                <NavLink to={'/category/monitores'}>Monitores</NavLink>
                                <NavLink to={'/category/perifericos'}>Perifericos</NavLink>
                                <div className="animation start-home"></div>
                            </nav>
                         
                            <ul>
                                <span><CartWidget /></span>        
                            </ul>
                         </div>       
                            

                        </div>
                    </div>
                </div>    
                <Outlet/>
            </>
    )
}





