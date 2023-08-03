import React from "react"
import '../../public/css/ItemListContainer.css'
import Item from "./Item"
import Footer from "./Footer"




const ItemListContainer = ({greeting}) => {



    return(
        <>  
            <div>
                <h1 style={styles.h1Container}>{greeting}</h1>
            </div>
      
            <Item />
            <Footer />
        </>
    )
}

export default ItemListContainer;

const styles = {

    h1Container:{
        fontFamily: 'Monoton',
        margin: 40,
        paddingLeft: 10,
        textTransform: 'uppercase',
        fontWeight: 400,
        fontSize: 20,
        textAlign: 'center',
        color: 'grey',
    }
}