import CartWidget from './CartWidget'
import '../../public/css/NavBar.css'
import { NavLink } from 'react-router-dom'





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

                            <NavLink to={'/category/:categoryid'}>
                                <nav>
	                                <a href="#">Consolas</a>
	                                <a href="#">Perifericos</a>
	                                <a href="#">Componentes</a>
	                                <a href="#">Notebooks</a>
	                                <a href="#">Sillas</a>
	                                <div className="animation start-home"></div>
                                </nav>
                            </NavLink>

                        </div>
                    </div>
                </div>    
            </>
    )
}


export default NavBar;


