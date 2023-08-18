import { useNavigate } from "react-router-dom";
import "./Item.css"


export const Item = ( {id, title, image, price } ) => {

const navigate = useNavigate();


  return(

    
                <div className="card" >              
                  <div className="photoProduct" onClick={ () => navigate(`/item/${id}`)}>      
                   <img src={image} height={130} width={170} />
                
                  </div>
                  <p className="cardPrice">$ {price}</p>
                  <div className="titleProduct">
                    <h4>{title}</h4>

                  </div>
                    
          
                </div>  
       

            
  )
}

