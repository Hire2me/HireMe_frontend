import React from "react"
import Header from "../Components/Header/Header"
import Card from "../Components/Card/Card"
import AddSlider from "../Components/AddSlider/AddSlider"
import Hero from "../Components/Hero/Hero"
import Footer from "../Components/Footer/Footer"

const HomePage = () => {
    return (
        <div> 
            <Header />
            <Card/>
           
            <AddSlider/>
            <Hero/>
            <Footer />
        </div>
    )
}

export default HomePage