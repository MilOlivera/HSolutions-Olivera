import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";        
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";


import '../../public/css/Item.css'

const Item = () => {
    

    const url1 = 'https://fakestoreapi.com/products'
    const url2 = 'https://api.escuelajs.co/api/v1'
   


//     const onAdd = (cantidad) => {
//     console.log(`Compraste ${cantidad} unidades`);
//   };

//   const { nombreCategoria } = useParams();

//   const URL = nombreCategoria
//     ? `https://api.mercadolibre.com/sites/MLA/search?q=${nombreCategoria}`
//     : "https://api.mercadolibre.com/sites/MLA/search?q=notebook";

  const [productos, setProductos] = useState([]);


useParams()
console.log(useParams(), 'MENSAJE')

  const buscarProductos = async() => {

        // if(categoryid){
        //     try{
        //         const response = await fetch(`${url2}/categories/${categoryid}`, {setTimeout: 2000})
        //         const data = await response.json()
        //         setProductos(data)
        //     }
        //     catch(error){
        //     console.log(error)
        //     }
        // }else{
          
            try{
                const response = await fetch(`${url2}/products?offset=0&limit=9`, {setTimeout: 2000})
                const data = await response.json()
                setProductos(data)
                console.log(data)
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
        {productos.map((product) => {

            return(
             <div>

                <div className="card">
                
                <div className="photoProduct">
                {/* <NavLink to={`/item/${product.id}`}> */}

                    <a href={product.id}>
                        <img src={product.images} height={200} width={250} onClick={() => navigate(`/item/${product.id}`)}/>
                    </a>

                  {/* </NavLink> */}

                  <p className="cardPrice">$ {product.price}</p>
                </div>
                
                <div className="titleProduct">
                  <h4>{product.title}</h4>
                </div>
                
              {/* <NavLink to={'/detalle'}> */}
                <div className="cardTitle" onClick={() => navigate(`/item/${product.id}`)}>
                  <button>Ver Detalle</button>
                </div>
              {/* </NavLink> */}
              </div>  
            </div>
        )

        })}

        </div>
    )
};

export default Item;
