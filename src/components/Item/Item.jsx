import { useNavigate } from "react-router-dom";
import "./Item.css"
import { Button } from "../Item";

export const Item = ( {id, title, image, price } ) => {

const navigate = useNavigate();


  return(

    
                <div className="card" >              
                  <div className="photoProduct" onClick={ () => navigate(`/item/${id}`)}>      
                   <img src={image} height={200} width={250} />
                
                  </div>
                  <p className="cardPrice">$ {price}</p>
                  <div className="titleProduct">
                    <h4>{title}</h4>

                  </div>
                        
                  <div className="cardTitle" onClick={() => navigate(`/item/${id}`)}>
                    <Button msg={'Ver detalle'}/>
                  </div>
          
                </div>  
       

    
  )
}










// import React from "react";
// import { useState, useEffect } from "react";
// import { Link, NavLink, useNavigate, useParams } from "react-router-dom";        
// import Button from '../Button/Button'


// import '../../public/css/Item.css'

// const Item = () => {
    

//     const url2 = 'https://api.escuelajs.co/api/v1'
   

//   const [productos, setProductos] = useState([]);


//   const buscarProductos = async() => {


          
//             try{
//                 const response = await fetch(`${url2}/products?offset=0&limit=9`, {setTimeout: 2000})
//                 const data = await response.json()
//                 setProductos(data)
               
//             }
//             catch(error){
//             console.log(error)
//             }
        
//     }
        
    
//     useEffect(() => {
//         buscarProductos()
//     }, [])

//     const navigate = useNavigate();
    
//   return(
    
//         <div className='cardContainer'>
//         {productos.map((product, idx) => {

//             return(
//              <div key={idx}>

//                 <div className="card" >
                
//                 <div className="photoProduct">

//                     <a href={product.id}>
//                         <img src={product.images} height={200} width={250} onClick={() => navigate(`/item/${product.id}`)}/>
//                     </a>


//                   <p className="cardPrice">$ {product.price}</p>
//                 </div>
                
//                 <div className="titleProduct">
//                   <h4>{product.title}</h4>
//                 </div>
                
              
//                 <div className="cardTitle" onClick={() => navigate(`/item/${product.id}`)}>
//                   <Button msg={'Ver detalle'}/>
//                 </div>
             
//               </div>  
//             </div>
//         )

//         })}

//         </div>
//     )
// };

// export default Item;
