import CartWidget from './CartWidget'
import './NavBar.css'



const NavBar = () => {
return (
            <>
                <div>
                    <div>
                        
                            <li>
                                <span><CartWidget /></span>        
                            </li>
                      
                        <div>
                            <h1 className='NavBarH1'>HARD SOLUTIONS</h1>

                            <nav>
	                            <a href="#">Consolas</a>
	                            <a href="#">Perifericos</a>
	                            <a href="#">Componentes</a>
	                            <a href="#">Notebooks</a>
	                            <a href="#">Sillas</a>
	                            <div class="animation start-home"></div>
                            </nav>

                        </div>
                    </div>
                </div>    
            </>
    )
}


export default NavBar;


