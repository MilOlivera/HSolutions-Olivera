import React from "react";



const ItemListContainer = ({greeting}) => {

    return(
        <>
            <h1 style={styles.h1Container}>{greeting}</h1>
  
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
        fontSize: 60,
        textAlign: 'center',
        color: 'grey'
        // textShadow: 0 0 0 'transparent',
        //             0 0 10 '#c5c6c8',
        //             0 0 20 'rgb(94,95,97)',
        //             0 0 40 '#c5c6c8',
        //             0 0 100 '#c5c6c8',
        //             0 0 200 '#c5c6c8',
        //             0 0 300 '#c5c6c8',
        // animation: animate 3s infinite alternate,
    }
}