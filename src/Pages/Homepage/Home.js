import React from 'react'
import Hero from './Components/Hero/Hero'
import Benefits from './Components/Benefits/Benefits'
import Tow from './Components/TypesofWork/ToW'
import FAQs from './Components/FAQs/FAQs'
import Footer from '../../Components/Footer/Footer'

function Home() {
    return (
        <div>
            <Hero/>
            <Benefits/>
            <Tow/>
            <FAQs/>
            <Footer/>
        </div>
    )
}

export default Home

