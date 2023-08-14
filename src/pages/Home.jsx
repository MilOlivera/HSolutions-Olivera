import { useState, useEffect } from "react";
import {getProducts}  from "../lib/products.request";
import { ItemListContainer, Loader } from "../components/Item";


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {

        getProducts()
            .then( 
                (res) => {
                
                setIsLoading(false);
                setProducts(res);
                console.log(res)
            }
        )
    }, [])

    return(
        <div>
        {isLoading ? (
            <Loader />
        ) : (


        <div className='cardContainer'>                
            <div className="container">
                <ItemListContainer products={products} />
            </div>           
            <p><strong>FUNCIONANDO</strong></p>
        </div>
 
        )}
        </div>
        )
}

