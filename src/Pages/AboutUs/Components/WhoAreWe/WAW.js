import React from 'react'
import {Container} from '@material-ui/core'
import waw from '../../../../Assets/About/Waw.svg'
import './WAW.css'

function WAW() {
    return (
        <div className="WaW">
            <Container  id="Waw-container">
                <div className="Waw-text">
                    <h1>Who are we?</h1>
                    <p>Edufeat is a leading company providing educational services all across the globe. Edufeat has become well known among the tutors & the students for reliable & trustworthy services. We aim to help students learn at an affordable cost. We have a team of experts who act as a bridge between the tutors and the students. In Edufeat's short existence, it has owned a place in this competitive era.</p>
                </div>                
                <div className="Waw-img">
                    <img src={waw} alt="" 
                    style={{border:"black solid 1px", width:"100%"}}
                    />
                </div>
            </Container>     
        </div>
    )
}

export default WAW
