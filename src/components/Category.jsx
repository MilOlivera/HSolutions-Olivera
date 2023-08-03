import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import '../../public/css/Category.css'


const Category = () => {

    const url2 = 'https://api.escuelajs.co/api/v1'
    const {categoryid} = useParams();

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    

        const buscarProductos = async() => {

            try{
                const response = await fetch(`${url2}/products/?categoryId=${categoryid}&offset=0&limit=9`, {setTimeout: 1500})
                const data = await response.json()
                setIsLoading(false)
                setProductos(data)
                
                
            }
                catch(error){
            console.log(error)
                }
        }

    
    useEffect(() => {
        buscarProductos()
    }, [productos])
 
    const navigate = useNavigate();

    return(
        <>
        <div><h5>{isLoading ? "Cargando..." : "Listo"}</h5></div>
        <div className="cardContainer">
            {productos.map((product,idx) => {
                
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
    </>
    )
}
export default Category;