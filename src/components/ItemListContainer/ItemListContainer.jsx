import { Item } from "../Item"
import "./ItemListContainer.css"

export const ItemListContainer = ( { products, loading = false} ) => {

    return(
    
    <div className="cardContainer">
        {loading ? (
        <>
            <div className="skeleton">
                <div className="skeleton__img"></div>
            </div>
            <div className="skeleton">
                <div className="skeleton__img"></div>
            </div>
            <div className="skeleton">
                <div className="skeleton__img"></div>
            </div>
        </>
        ) : (
     
        products.map( (product) => (
           
            <Item
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                
                
            />    
       
        ))

    )}
    
    </div>
    )
}

