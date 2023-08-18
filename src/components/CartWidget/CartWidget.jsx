import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import '../NavBar/NavBar.css'
import { useNavigate } from "react-router-dom";
import { useCartContext } from '../../state/Cart.context';



export const CartWidget = () => {

    const {getCartQty} = useCartContext();
    const navigate = useNavigate();

    return (
        <div className="cartIcon" onClick={() => navigate(`/cart`)}>
             <FontAwesomeIcon icon={faCartShopping} className='faCartShopping'/>{getCartQty ? <span className='cart-widget__qty'>({getCartQty})</span> : null}
            
        </div>
    )
}

