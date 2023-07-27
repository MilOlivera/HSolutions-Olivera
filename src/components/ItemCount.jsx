import '../../public/css/ItemCount.css'

import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {


    const [count, setCount] = useState(1)

    const sumarCart = () => {
      if(stock > count)  setCount(count + 1)
    }
    const restarCart = () => {
       if(count > 1 ) setCount(count - 1)
    }

return(
    <div>
        <div>            
            <button className='buttonCount' onClick={ () => restarCart() }>-</button>

            <span className="spanItemCount">{count}</span>

            <button className='buttonCount' onClick={ () => sumarCart() }>+</button>
        </div>
            <button  className='buttonAdd' disabled={!stock} onClick={ () => onAdd(count)}>Agregar al carrito</button>
    </div>
)
}

export default ItemCount;