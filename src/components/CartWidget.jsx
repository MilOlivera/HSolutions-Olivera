import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDisplay, faUser} from "@fortawesome/free-solid-svg-icons";
import './NavBar.css'


const CartWidget = () =>  {
    // const [count, setCount] = useState(0)
return(
    <>
        {/* <a href='#' style={styles.iconCarrito}><FontAwesomeIcon icon={faCartShopping} /></a> */}
        <div className="contenedorCart">
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faCartShopping} />
        1
        {/* <button style={styles.iconCarrito} onClick={() => setCount((count) => count + 1)}>
          {count}
        </button> */}
        </div>
    </>
)
}

export default CartWidget;

const styles = {
    
    // iconCarrito:{
    //     backgroundColor: 'red',
    //     width: '40%',
    //     fontSize: 40,
    //     margin: 40,
    //     color: '#124eb5',
    //     display: 'flex',
    //     flexWrap: 'wrap' 
    // }
}