import React from "react";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";

const Home = () => {

    return(
        <>
            <NavBar />
            <ItemListContainer greeting='BIENVENIDOS'/>
            <Footer />
        
        </>

    )
}

export default Home;