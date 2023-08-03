import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";        
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";


import '../../public/css/Item.css'

const Item = () => {
    

    const url2 = 'https://api.escuelajs.co/api/v1'
   

  const [productos, setProductos] = useState([]);


  const buscarProductos = async() => {


          
            try{
                const response = await fetch(`${url2}/products?offset=0&limit=9`, {setTimeout: 2000})
                const data = await response.json()
                setProductos(data)
               
            }
            catch(error){
            console.log(error)
            }
        
    }
        
    
    useEffect(() => {
        buscarProductos()
    }, [])

    const navigate = useNavigate();
    
  return(
    
        <div className='cardContainer'>
        {productos.map((product, idx) => {

            return(
             <div key={idx}>

                <div className="card" >
                
                <div className="photoProduct">

                    <a href={product.id}>
                        <img src={product.images} height={200} width={250} onClick={() => navigate(`/item/${product.id}`)}/>
                    </a>


                  <p className="cardPrice">$ {product.price}</p>
                </div>
                
                <div className="titleProduct">
                  <h4>{product.title}</h4>
                </div>
                
              
                <div className="cardTitle" onClick={() => navigate(`/item/${product.id}`)}>
                  <button>Ver Detalle</button>
                </div>
             
              </div>  
            </div>
        )

        })}

        </div>
    )
};

export default Item;
