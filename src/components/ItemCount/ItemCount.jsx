import './ItemCount.css'
import {Button} from '../Button/Button';
import { useState } from "react";

export const ItemCount = ({stock = 0, onAdd}) => {


    const [count, setCount] = useState(1)

    const sumarCart = () => {
      if(stock > count)  setCount(count + 1)
    }
    const restarCart = () => {
       if(count > 1 ) setCount(count - 1)
    }

return(
    <div>
        {stock ? (
        <>
            <div>            
                <button className='buttonCount' onClick={ () => restarCart() }>-</button>

                <span className="spanItemCount">{count}</span>

                <button className='buttonCount' onClick={ () => sumarCart() }>+</button>
            </div>
            <Button 
                msg={'Agregar al carrito'} 
                className='buttonAdd' 
                disabled={!stock} 
                onClick={ () => { 
                onAdd(count)
                setCount(1)
                }} />
            </>
        ) : (
            <h5> Tenes todo en el carrito</h5>
        )}
        
    </div>
)
}

