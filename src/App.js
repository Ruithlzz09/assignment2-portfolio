
import React from "react";
import NavBar from "./NavBar";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Portfolio from "./Portfolio";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import CopyRight from "./CopyRight";


const App = () =>{
    return (
        <div>
            <NavBar/>
            <Header/>
            <Portfolio/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>
            <CopyRight/>
        </div>
    );
}

export default App;