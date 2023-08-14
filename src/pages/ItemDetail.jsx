import { useState, useEffect, useCallback } from "react";
import {getProducts} from "../lib/products.request"
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext} from "../state/Cart.context"
import { Item, ItemCount, Loader } from "../components/Item";
import './ItemDetail.css'


export const ItemDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState({});

    const { addProduct, itemInCart } = useCartContext();
    
    useEffect(() => {

        getProducts(id).then((res) => {
            
            if(!res) return navigate('/')
            setProducts(res);
            console.log(id)
        });
    }, [id])


// 
    const handleAdd = useCallback(
        (qty) => {
            addProduct(products, qty);
        },
        [addProduct, products]
        
    );

    if(!Object.keys(products).length) return <Loader />;

    return(

        <div className="container">
         
                
                
             
             <div className="detail">
                 <img src={products.image} alt="" className="detail__image" />
                <div className="content">
                     <h1>{products.title}</h1>
                     <p>{products.description}</p>
                     <p className="cardPrice">$ {products.price}</p>
                    <ItemCount 
                        stock={products.stock - (itemInCart?.(id)?.qty || 0)}
                        onAdd={handleAdd}
                    />
               </div>
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