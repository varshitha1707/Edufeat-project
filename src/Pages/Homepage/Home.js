import React from 'react'
import Nav from '../Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Slider from '../Components/slider'
import Benefits from './Components/Benefits/Benefits'
import Tow from './Components/TypesofWork/ToW'
import FAQs from './Components/FAQs/FAQs'

function Home() {
    return (
        <div>
            <Nav/>
            <Hero/>
            {/* <Slider/> */}
            <Benefits/>
            <Tow/>
            <FAQs/>
        </div>
    )
}

export default Home

