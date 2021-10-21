import React from 'react'
import Hero from './Components/Hero/Hero'
import Benefits from './Components/Benefits/Benefits'
import Tow from './Components/TypesofWork/ToW'
import FAQs from './Components/FAQs/FAQs'
import Footer from '../../Components/Footer/Footer'
import Test from './Components/test/test'
import Stj from './Components/Stepstojoin/Stj'

function Home() {
    return (
        <div>
            <Hero/>
            {/* <Benefits/> */}
            <Test/>
            <Tow/>
            <Stj/>
            <FAQs/>
            <Footer/>
        </div>
    )
}

export default Home

