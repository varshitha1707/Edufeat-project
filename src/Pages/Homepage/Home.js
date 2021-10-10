import React from 'react'
import Nav from '../Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Slider from '../Components/slider'
import Benefits from './Components/Benefits/Benefits'

function Home() {
    return (
        <div>
            <Nav/>
            <Hero/>
            {/* <Slider/> */}
            <Benefits/>
        </div>
    )
}

export default Home

