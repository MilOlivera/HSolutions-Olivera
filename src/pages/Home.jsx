import { useState, useEffect } from "react";
import {getProducts}  from "../lib/products.request";
import { ItemListContainer, Loader } from "../components/Item";
import '../components/ItemListContainer/ItemListContainer.css'


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {

        getProducts()
            .then( 
                (res) => {
                
                setIsLoading(false);
                setProducts(res);
            
            }
        )
    }, [])

    return(
        <div>
        {isLoading ? (
            <Loader />
        ) : (

            <div> 
                   
           
                <ItemListContainer products={products} />
            
                
            </div>
        )}
        </div>
        )
}

