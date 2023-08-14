import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDisplay, faUser} from "@fortawesome/free-solid-svg-icons";
import '../NavBar/NavBar.css'
import { useNavigate } from "react-router-dom";
import { useCartContext } from '../../state/Cart.context';


export const CartWidget = () => {

    const {getCartQty} = useCartContext();
    const navigate = useNavigate();

    return(
        <div className="cart" onClick={() => navigate(`/cart`)}>
             <FontAwesomeIcon icon={faCartShopping} /> {getCartQty ? <span className='cart-widget__qty'>({getCartQty})</span> : null}
            {/* <small className="numberCart">1</small> */}
        </div>
    )
}




// const CartWidget = () =>  {
//     // const [count, setCount] = useState(0)

//     const navigate = useNavigate();
// return(
//     <>
//         {/* <a href='#' style={styles.iconCarrito}><FontAwesomeIcon icon={faCartShopping} /></a> */}
//         <div className="contenedorCart">
//             <div className="user" onClick={() => navigate(`/form`)}>
//                 <FontAwesomeIcon icon={faUser} />
//             </div>
//             <div className="cart" onClick={() => navigate(`/cart`)}>
//                 <FontAwesomeIcon icon={faCartShopping} />
//                 <small className="numberCart">1</small>
//             </div>
        
//         {/* <button style={styles.iconCarrito} onClick={() => setCount((count) => count + 1)}>
//           {count}
//         </button> */}
//         </div>
//     </>
// )
// }

// export default CartWidget;
