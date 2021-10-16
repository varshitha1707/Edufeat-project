import { Container } from '@material-ui/core'
import React from 'react'
import guy from '../../../../Assets/About/guy.svg'
import './JoinUs.css'

function JoinUs() {
    return (
        <div>
            <div className="Stats">
                <Container id="Stats-text-all">
                    <div className="Stats-text">
                        <h2>30+  Subjects</h2>
                    </div>
                    <div className="Stats-text">
                        <h2>50+ Tutors</h2>
                    </div>
                    <div className="Stats-text">
                        <h2>1000+ Students</h2>
                    </div>
                </Container>
            </div>
            <div>
                <div>
                    <img src={guy} alt="guy" className="guy" />
                </div>
                <div className="joinUs">
                    <a href="/">
                        <button className="joinUs-btn">Join Us</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
