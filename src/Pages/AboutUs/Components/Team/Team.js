import React from 'react'
import { Container } from '@material-ui/core'
import team from '../../../../Assets/About/team.svg'
import './Team.css'

function Team() {
    return (
        <div>
            <Container>
                <div className="Team-title">
                    <h1>Team</h1>
                </div>
                <div className="Team-img">
                    <img src={team} alt="" style={{border:"black 1px solid", width:"60%", display:'block', margin:"auto"}}/>
                </div>
                
            </Container>
        </div>
    )
}

export default Team
