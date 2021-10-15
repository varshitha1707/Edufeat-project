import React from 'react'
import { Grid } from '@material-ui/core'
import learn from '../../../../Assets/Hero/learn.svg'
import earn from '../../../../Assets/Hero/earn.svg'
import grow from '../../../../Assets/Hero/grow.svg'
import imgmob from '../../../../Assets/Hero/hero-mob.svg'
import Carousel from 'react-elastic-carousel'
import './Hero.css'
function Hero() {

    const breakpoints =[
        { width: 280, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1200, itemsToShow: 1 },
        { width: 1400, itemsToShow: 1 },
    ]
    // data to be mapped
    const heroData =[
        {
            id:'1',
            title: 'Learn . Earn . Grow',
            subtitle:'Join the squad of brilliant tutors and EARN ₹ 30,000/week*',
            img:learn,
        }, 
        {
            id:'2',
            title: 'Learn . Earn . Grow',
            subtitle:'Join the squad of brilliant tutors and EARN ₹ 30,000/week*',
            img:earn,
        },
        {
            id:'3',
            title: 'Learn . Earn . Grow',
            subtitle:'Join the squad of brilliant tutors and EARN ₹ 30,000/week*',
            img:grow,
        },
        {
            id:'4',
            title: 'Learn . Earn . Grow',
            subtitle:'Join the squad of brilliant tutors and EARN ₹ 30,000/week*',
            img:learn,
        },

    ]

    return (
    <div className="Hero">
        {
            window.innerWidth < 500 ?(
            <Carousel 
            breakPoints={breakpoints} 
            enableAutoPlay={true} 
            showArrows={false} 
            // add a showbuttons wala false cheez.
            // style={{margin:'45px'}}
            className="Hero-carousel" 
            >
                <Grid container spacing={0} 
                    className="Hero-container" 
                    direction={window.outerWidth<900?'row':'row-reverse'}>
                    {/* hero image div */}
                    <Grid item xs={12} sm={8} md={6} lg={6} className="Hero-img" >
                        <img src={imgmob} alt="logo" className="home-img" style={{width:'100%'}} />  
                    </Grid>
                    {/* hero text div */}
                    <Grid item xs={12} sm={8} md={6} lg={6}  className="Hero-text" >
                        {/* hero title text */}
                        <div className="Hero-title">
                                <span>Learn . Earn . Grow</span>
                        </div>
                        <div className="Hero-subtitle">
                            <p>Join the squad of brilliant tutors and  EARN ₹ 30,000/week*</p>
                        </div>
                        {/* hero buttons */}
                        <br/>
                        <div className="Hero-button">
                            <button className="button">
                                Join Now
                            </button>
                        </div>
                    </Grid >
                </Grid >
            </Carousel>
            ):(
            <Carousel 
            breakPoints={breakpoints} 
            enableAutoPlay={true} 
            showArrows={false} 
            // add a showbuttons wala false cheez.
            // style={{margin:'45px'}}
            >
            {heroData.map(client => (
                <Grid container spacing={0} 
                className="Hero-container" 
                direction={window.outerWidth<900?'row':'row-reverse'}
                >
                    {/* hero image div */}
                    <Grid item xs={12} sm={8} md={6} lg={6} className="Hero-img" >
                        <img src={client.img} alt="logo" className="home-img" style={{width:'100%'}} />  
                    </Grid>
                    {/* hero text div */}
                    <Grid item xs={12} sm={8} md={6} lg={6}  className="Hero-text" >
                        {/* hero title text */}
                        <div className="Hero-title">
                                <span>{client.title}</span>
                        </div>
                        <div className="Hero-subtitle">
                            <p>{client.subtitle}</p>
                        </div>
                        {/* hero buttons */}
                        <br/>
                        <div className="Hero-button">
                            <button className="button">
                                Join Now
                            </button>
                        </div>
                    </Grid >
                </Grid > 
            ))}
            </Carousel>
            )
        }
    </div>
    )
}

export default Hero


// {/* <div >
//                 {heroData.map(client => (
//                         <Grid Container spacing={0} className="Hero-container" direction={window.outerWidth<900?'row':'row-reverse'} style={{display:(window.outerWidth<900?'block':'flex')}}>
//                         <Grid item xs={10} sm={10} md={8} lg={6} className="Hero-img" style={{width:'85%'}}>
//                             <img src={client.img} alt="logo" className="home-img"  style={{width:'60%'}}/> 
//                         </Grid>
//                         <Grid item xs={10} sm={10} md={8} lg={6}  className="Hero-text" >
//                         hero title text
//                             <div className="Hero-title">
//                                 <span>{client.title}</span>
//                             </div>
//                             <div className="Hero-subtitle">
//                                 mapping out the subtitles
//                             <div className="subtitle">   
//                                 <div className="-subtitle" >
//                                     <p>{client.subtitle}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         hero buttons
//                         <br/>
//                             <div className="Hero-button">
                                

//                         </div>
//                     </Grid >
//                         </Grid>
//                 ))}
//         </div> */}