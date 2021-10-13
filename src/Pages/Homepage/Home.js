import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Benefits from './Components/Benefits/Benefits'
import Tow from './Components/TypesofWork/ToW'
import FAQs from './Components/FAQs/FAQs'
import Footer from '../../Components/Footer/Footer'

function Home() {
    return (
        <div>
            <Nav/>
            <Hero/>
            {/* <Slider/> */}
            <Benefits/>
            <Tow/>
            <FAQs/>
            <Footer/>
        </div>
    )
}

export default Home

