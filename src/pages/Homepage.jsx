import React from "react"
import Heading from "../Components/Heading/Heading"
import Card from "../Components/Card/Card"
import AddSlider from "../Components/AddSlider/AddSlider"
import Hero from "../Components/Hero/Hero"
import Footer from "../Components/Footer/Footer"

const HomePage = () => {
    return (
        <div> 
            <Heading />
            <Card/>
           
            <AddSlider/>
            <Hero/>
            <Footer />
        </div>
    )
}

export default HomePage