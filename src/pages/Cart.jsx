import { useState } from "react";
import { useCartContext } from "../state/Cart.context";
import addOrder from "../lib/orders.request"
import { updateManyProducts } from "../lib/products.request";
import { Input, LocaleString } from "../components/Item";

import { Button } from "../components/Item";
import { useNavigate } from "react-router-dom";
import "../components/Input/Input.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from "@fortawesome/free-solid-svg-icons";

const BUY_FORM = [
  { label: "Nombre", name: "name", placeholder: "Escribe tu nombre completo" },
  { label: "Correo", name: "email", placeholder: "Escribe tu email" },
  { label: "Repite correo", name: "email2", placeholder: "Repite tu email" },
  { label: "Teléfono", name: "phone", placeholder: "Escribe tu teléfono" },
];


export const Cart = () => {

    const [form, setForm] = useState({})

    const { cart, cleanCart, getTotalPrice, removeProduct } = useCartContext();

    const createOrder = async () => {

        const items = cart.map(({ id, title, qty, price }) => ({

            id,
            title,
            qty,
            price,
        }));

    const { name, phone, email} = form;

        const order = {

            buyer: { name, phone, email},
            items,
            total: getTotalPrice,
        };

        const id = await addOrder(order);
        

        await updateManyProducts(items);

        cleanCart();
    }

    const handleChange = ({target: {value, name}}) => {

      setForm({
        ...form,
        [name]: value,
      });
    };

    const navigate = useNavigate();
    
    return (
      <div className="cart">
        <div className="cart__container">
          {cart.length ? (
            <>
              <div className="cart__item" style={{ border: "none" }}>
                <button className="cart__item-button" onClick={cleanCart}>
                  Vaciar carrito
                </button>
              </div>
              <div className="cart__products">
                <div
                  className="cart__item"
                  style={{ border: "none", padding: "0 16px" }}
                >
                  <div className="itemProduct"><span>Producto</span></div>
                  <div className="itemQty"><span>Cantidad</span></div>
                  <div className="itemPrice"><span>Precio</span></div>
                  <div className="itemSubtotal"><span>Subtotal</span></div>
                </div>
                {cart.map((item) => (
                  <div className="cart__item" key={item.id}>
                    <div className="itemTitle"><span>{item.title}</span></div>
  
                   <div className="itemQty2"><span>{item.qty}</span></div>
              
                    <div className="itemPrice2"><span><LocaleString num={item.price} /></span></div>
                   
                    <div className="itemSubtotal2"><span><LocaleString num={item.qty * item.price} /></span></div>
  
                    <button
                      className="cart__item-delete"
                      onClick={() => removeProduct(item.id)}
                    >
                      
                      <FontAwesomeIcon icon={faTrash} />
                     
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart__item" style={{ border: "none" }}>
                <div className="cart__total">
                  <span>Total : </span> <LocaleString num={getTotalPrice} />
                </div>{" "}
              </div>
              <div className="form">
                {BUY_FORM.map((input) => (
                  <Input key={input.name} onChange={handleChange} {...input} />
                ))}
                <button
                  className="cart__item-button form__button"
                  onClick={createOrder}
                >
                  Realizar pedido
                </button>
              </div>
            </>
          ) : (
            <div className="cardTitle" onClick={() => navigate(`/`)}>
            <h1>El carrito esta vacio</h1>
                <Button msg={'Volver al home'}/>
            </div>
          )}
        </div>
      </div>
    );

}

