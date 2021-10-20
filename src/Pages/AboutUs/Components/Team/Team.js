import React from 'react'
import { Container } from '@material-ui/core'
import team from '../../../../Assets/About/team.png'
import './Team.css'

function Team() {
    return (
        <div>
            <Container>
                <div className="Team-title">
                    <h1>Team</h1>
                </div>
                <div className="Team-img">
                    <img src={team} alt="" style={{width:"80%", display:'block', margin:"auto"}}/>
                </div>
                
            </Container>
        </div>
    )
}

export default Team
