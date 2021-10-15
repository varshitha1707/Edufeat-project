import React from 'react'
import hero1 from '../../../../Assets/About/hello.svg'
// import hero2 from '../../../../Assets/About/hero-about-text.svg'
import './HeroA.css'

function HeroA() {
    return (
        <div className="HeroA">
            <div className="HeroA-img">
                {/* hero svg */}
                <img src={hero1} alt="hero-about" />
            </div>
        </div>
    )
}

export default HeroA
