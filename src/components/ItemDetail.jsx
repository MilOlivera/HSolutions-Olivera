import React from "react";
import '../../public/css/ItemDetail.css'
import ItemCount from "./ItemCount";
import Item from "./Item";
import { useState, useEffect, useParams } from "react";


const ItemDetail = () =>{


    const url2 = 'https://api.escuelajs.co/api/v1'
    const [prueba, setPrueba] = useState([]);

    const {id} = useParams();
    console.log(id, 'OTRO MENSAJE')


    const buscarP = async() => {

            try{
                const response = await fetch(`${url2}/products/${id}`, {setTimeout: 2000})
                const data = await response.json()
                setPrueba(data)
                console.log(data)
            }
                catch(error){
            console.log(error)
                }
        }

    

    useEffect(() => {
        buscarP()
    }, [])


    const manejarCart = (cantidad) => {

    console.log('Agregaste', cantidad, 'items al carrito')
    }

    return(
        <div className="container">
            <div className="detail">
                <img src={"../../public/img/vite.svg"} alt="" className="detail__image" />
                <div className="content">
                    <h1>ITEM DETAIL</h1>
                    <ItemCount  stock={10} onAdd={manejarCart}/>
                </div>
            </div>
        </div>
    )
    
}


export default ItemDetail;