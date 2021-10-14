import React from 'react'
import hero1 from '../../../../Assets/About/hello.svg'
// import hero2 from '../../../../Assets/About/hero-about-text.svg'
import './HeroA.css'

function HeroA() {
    return (
        <div className="HeroA">
            <div className="HeroA-img">
                <img src={hero1} alt="hero-about" />
            </div>
            {/* <div>
                <img src={hero2} alt="hero-about-text" />
            </div> */}
        </div>
    )
}

export default HeroA
