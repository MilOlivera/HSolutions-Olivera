import {CartWidget} from '../CartWidget/CartWidget'
import { Footer } from '../Item'
import './NavBar.css'
import { NavLink, Outlet } from 'react-router-dom'



export const NavBar = () => {


return (
            <>
                <div>
                    <div>

                          
                      
                        <div>
                            <h1 className='NavBarH1'><NavLink to={'/'} style={{textDecoration:'none', color:'white'}}>HARD SOLUTIONS </NavLink></h1>
                        <div>
	                        <nav>
                                <NavLink to={'/category/consolas'} style={({isActive }) => ({ backgroundColor: isActive ? "#1abc9c" : null, borderRadius: isActive ? "8px" : null })}>Consolas</NavLink>
                                <NavLink to={'/category/componentes'} style={({isActive }) => ({ backgroundColor: isActive ? "#e74c3c" : null, borderRadius: isActive ? "8px" : null })}>Componentes</NavLink>
                                <NavLink to={'/category/notebooks'} style={({isActive }) => ({ backgroundColor: isActive ? "#3498db" : null, borderRadius: isActive ? "8px" : null })}>Notebooks</NavLink>
                                <NavLink to={'/category/monitores'} style={({isActive }) => ({ backgroundColor: isActive ? "#9b59b6" : null, borderRadius: isActive ? "8px" : null })}>Monitores</NavLink>
                                <NavLink to={'/category/perifericos'} style={({isActive }) => ({ backgroundColor: isActive ? "#e67e22" : null, borderRadius: isActive ? "8px" : null })}>Perifericos</NavLink>
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
                <Footer />
            </>
    )
}
