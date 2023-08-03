import React from "react";
import '../../public/css/ItemDetail.css'
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemDetail = () => {

    
    const [productos, setProductos] = useState([]);
    const url2 = 'https://api.escuelajs.co/api/v1'
    
    const {id} = useParams();

    

    


    const buscarProductos = async() => {

            try{
                const response = await fetch(`${url2}/products/${id}`, {setTimeout: 1000})
                const data = await response.json()
                setProductos([data])
                
            }
                catch(error){
            console.log(error)
                }
        }

    

    useEffect(() => {
        buscarProductos()
    }, [])


    const manejarCart = (cantidad) => {

    console.log('Agregaste', cantidad, 'items al carrito')
    }

    return(
        <div className="container">
            {productos.map((product, idx) => {
                
            return(
            <div className="detail" key={idx}>
                <img src={product.images} alt="" className="detail__image" />
                <div className="content">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <ItemCount  stock={10} onAdd={manejarCart}/>
                </div>
            </div>
            )
            })}
        </div>
    );
    
}


export default ItemDetail;