import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock = 0, onAdd }) => {
  
  const [count, setCount] = useState(1);

  const handleSum = () => {

    setCount(Math.min(stock, count + 1));
  };

  const handleSub = () => {

    setCount(Math.max(1, count - 1));
  };

  return (
    <div className="item-count">
      {stock ? (
        <>
          <div className="btn-count">
            <button onClick={() => handleSub()} className="btn-sumres">-</button>
            <span>{count}</span>
            <button onClick={() => handleSum()} className="btn-sumres">+</button>
          </div>
          <button
            className="btn-add"
            disabled={!stock}
            onClick={() => {
              onAdd(count);
              setCount(1);
            }}
          >
            Agregar al carrito
          </button>
        </>
      ) : (
        <h5>Tienes todo en el carrito</h5>
      )}
    </div>
  );
};

