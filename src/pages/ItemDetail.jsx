import { useState, useEffect, useCallback } from "react";
import {getProduct} from "../lib/products.request"
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext} from "../state/Cart.context"
import { Item, ItemCount, Loader } from "../components/Item";
import './ItemDetail.css'



export const ItemDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    const { addProduct, itemInCart } = useCartContext();
    
    useEffect(() => {

        getProduct(id).then((res) => {
            
            if(!res) return navigate('/')
            setProduct(res);
           
        });
    }, [])


// 
    const handleAdd = useCallback(
        (qty) => {
            addProduct(product, qty);
        },
        [addProduct, product]
        
    );

   if(!Object.keys(product).length) return <Loader />;

    return(

        <div className="detailContainer">
         
                
                
             
             <div className="detail">
                 <img src={product.image} alt="" className="detail__image" height={140} width={170}/>
            </div>
            <div className="content">
                     <h1 className="detailTitle">{product.title}</h1>
                     <p className="detailDescription">{product.description}</p>
                     <p className="cardPrice">$ {product.price.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}</p>
                     <span className="detail__stock">Stock: {product.stock}</span>

                    <ItemCount 
                        stock={product.stock - (itemInCart?.(id)?.qty || 0)}
                        onAdd={handleAdd}
                    />
               </div>
           
             
        
         </div>
    )
}



// import React from "react";
// import './ItemDetail.css'
// import ItemCount from "../ItemCount/ItemCount";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";


// const ItemDetail = () => {

    
//     const [productos, setProductos] = useState([]);
//     const url2 = 'https://api.escuelajs.co/api/v1'
    
//     const {id} = useParams();

    

    


//     const buscarProductos = async() => {

//             try{
//                 const response = await fetch(`${url2}/products/${id}`, {setTimeout: 1000})
//                 const data = await response.json()
//                 setProductos([data])
                
//             }
//                 catch(error){
//             console.log(error)
//                 }
//         }

    

//     useEffect(() => {
//         buscarProductos()
//     }, [])


//     const manejarCart = (cantidad) => {

//     console.log('Agregaste', cantidad, 'items al carrito')
//     }

//     return(
//         <div className="container">
//             {productos.map((product, idx) => {
                
//             return(
//             <div className="detail" key={idx}>
//                 <img src={product.images} alt="" className="detail__image" />
//                 <div className="content">
//                     <h1>{product.title}</h1>
//                     <p>{product.description}</p>
//                     <ItemCount  stock={10} onAdd={manejarCart}/>
//                 </div>
//             </div>
//             )
//             })}
//         </div>
//     );
    
// }


// export default ItemDetail;