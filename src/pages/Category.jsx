import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../lib/products.request";
import { ItemListContainer } from '../components/Item'

export const Category = () => {

    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {

        setProducts([]);
        setIsLoading(true);
        getProducts(id).then((res) => {
            setIsLoading(false);
            setProducts(res);

        });
    }, [id])

    return(
        
             <div className="cardContainer">
                <ItemListContainer products={products} loading={isLoading} />
             </div>

    )
}

