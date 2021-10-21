import React from 'react'
import { Container, Grid } from '@material-ui/core'
import './Work.css'
import ceo from '../../../../Assets/About/ceo.png'
import work from '../../../../Assets/About/work.png'

function Work() {
    return (
        <div>
            <div className="CEO">
                <Container>
                    <Grid container direction={window.innerWidth<900?'row':'row-reverse'}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="CEO-img">
                            <img src={ceo} alt="ceo" style={{ margin:"auto", display:"block", width:"80%"}}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="CEO-msg" >
                            <h1>CEO’s  Message</h1>
                            <p>
                            Strive for betterment, then perfection...
                            I hope whenever you think about Edufeat, all you can imagine is the positive impact created by it.
                            May it be big or small, I consider it as Success. Nothing gives me more satisfaction than to know 
                            that we were once able to leave a beautiful mark in some part of your life.</p>
                        </Grid>
                        
                    </Grid>
                </Container>
            </div>
            <div className="animation">
                <h1>
                    INSERT LOTTIE FILE HERE
                </h1>
                {/* Animation edufeat success*/}
            </div>
            <div className="Work-culture">
                <Container>
                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="Work-culture-img">
                            <img src={work} alt="ceo" style={{ margin:"auto", display:"block", width:"60%"}}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className="Work-culture-msg">
                            <h1>Work life and Culture</h1>
                            <p>
                            We have now grown into a big family of 10,000+
                            members spread all across India. Our sole purpose
                            is to encourage College Students to Homemakers, 
                            to help students in need & become financially independent.
                            We believe in providing the best platform to work as a tutor.</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Work
