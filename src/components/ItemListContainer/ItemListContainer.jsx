import { Item } from "../Item"
import "./ItemListContainer.css"

export const ItemListContainer = ( { products, loading = false} ) => {

    <div className="item-list">
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
        ), console.log(products))
    )}
 
    </div>
}




















// const ItemListContainer = ({greeting}) => {



//     return(
//         <>  
//             <div>
//                 <h1 style={styles.h1Container}>{greeting}</h1>
//             </div>
      
//             <Item />
//             <Footer />
//         </>
//     )
// }

// export default ItemListContainer;

// const styles = {

//     h1Container:{
//         fontFamily: 'Monoton',
//         margin: 40,
//         paddingLeft: 10,
//         textTransform: 'uppercase',
//         fontWeight: 400,
//         fontSize: 20,
//         textAlign: 'center',
//         color: 'lightgoldenrodyellow',
//     }
// }