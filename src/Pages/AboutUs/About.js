import React from 'react'
import Work from './Components/CEO&Work/Work'
import HeroA from './Components/Hero/HeroA'
import WAW from './Components/WhoAreWe/WAW'
import Footer from '../../Components/Footer/Footer'
import Timeline from './Components/Timeline/Timeline'
import Team from './Components/Team/Team'
import JoinUs from './Components/JoinUs/JoinUs'

function About() {
    return (
        <div>
            <HeroA/>
            <WAW/>
            <Timeline/>
            <Work/>
            <Team/>
            <JoinUs/>
            <Footer/>
            
        </div>
    )
}

export default About
