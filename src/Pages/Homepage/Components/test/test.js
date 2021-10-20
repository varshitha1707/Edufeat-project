import React from "react"
import './test.css'
import benefit1 from '../../../../Assets/benefits-desk/1.svg'
import benefit2 from '../../../../Assets/benefits-desk/2.svg'
import benefit3 from '../../../../Assets/benefits-desk/3.svg'
import benefit4 from '../../../../Assets/benefits-desk/4.svg'
import benefit5 from '../../../../Assets/benefits-desk/5.svg'
import svg from '../../../../Assets/benefits-desk/scroll.svg'
import { motion, useViewportScroll,    useSpring,} from "framer-motion"
import Benefits from "../Benefits/Benefits"
import {Container, Grid} from '@material-ui/core'

function Test() {
  const variants={
    hidden:{
      opacity:0,
      y:'-100vh'
    },
    visible:{
      opacity:1,
      y:0
    }
  }

  const pathVariants={
    hidden:{
      // opacity:0,
      pathLength:0
    },
    visible:{
      // opacity:9,
      pathLength:1,
      // pathLength:scrollYProgress,
      transition:{
        duration:2,
        ease:'easeInOut',
      }
    }
  }


  const { scrollYProgress } = useViewportScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  function alternate(row) {
    var dir = "row";
    if(row%2!==0){
        dir = "row-reverse";
    }
    return dir;
}

  return (
    <div>
      <div id="test">
                <motion.svg 
                // variants={variants}
                // initial="hidden"
                // animate="visible"
                id="scroll-svg"
                // style={{ pathLength: scrollYProgress,
                // }}
                width="1203" height="2826" viewBox="0 0 1203 2826" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  <motion.path 
                  // style={{ pathLength: scrollYProgress}}
                  style={{
                    pathLength,
                    // rotate: 90,
                    // translateX: 5,
                    // translateY: 5,
                    // opacity: pathLength,
                    // scaleX: -1
                    strokeDasharray: "4 12",
                }}
                  // variants={pathVariants}
                  // initial="hidden"
                  // animate="visible"
                  stroke="#000000" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-dasharray="4 12"
                  d="M29.0002 3C-37.6665 155 -15.7998 468.6 605 507C1225.8 545.4 1130.33 811 1005 939C783.667 1087 339.4 1400.6 333 1471C325 1559 133 1855 941 2047C1587.4 2200.6 874.334 2628.33 437 2823"  />
                </motion.svg>
              </div>
      <div className="Benefits-UpContainer ">
            {/* Title */}
        <h1 className="Benefits-title" >Benefits as a Tutor</h1>
              {/* Alternating grid mapping the data */}
        <div className="AltrnatingridContainer">
        <Container className="Benefits-Main-Container">
          {/* mapping out the values */}
          {benefits.map(data=>(
            <Grid container className="Benefits-grid-container" key={data.id} direction={alternate(data.id)} >                           
              <Grid item className="Benefits-grid-item-img" xs={12} sm={12} md={6} lg={6} >
                {/* image */}
                <div>
                  <img src={data.img} alt="" className="Benefits-img"  />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} style={{ margin:"auto"}}>
                {/* text */}
                <div style={{ width:"85%"}}>
                  <h3 className="Benefits-grid-title" style={{color:(data.titlecol)}}>
                    {data.title}
                  </h3>
                  <p className="Benefits-grid-text">
                    {data.text}
                  </p>
                </div> 
              </Grid> 
            </Grid> 
          ))} 
            
        </Container>
        </div>
      </div>  
    </div>
  )
}

export default Test

const benefits =[
  {
      id: 1,
      img: benefit1,
      title: 'Crack Gate, IES, CAT & IAS',
      text:'Increase your chances by solving Objective to Conventional level questions & make money while doing so.',
      rank:"first"
  },
  {
      id:2,
      img: benefit2,
      title: 'Full Flexibility',
      text:'At Edufeat, you are in full control of your schedule. Take sessions when you like!',
      rank:"second"
  },
  {
      id:3,
      img: benefit3,
      title: 'Get Paid on Time',
      text:'Weekends Just Got 100 times better! Earn money every week & become Financially Independent.',
      rank:"third"
  },
  {
      id:4,
      img: benefit4,
      title: 'Become an Edufeatian',
      text:'Join the team of top tutors from IITs, NITs, and other reputed colleges. Bachelors to PHDs, everyone is welcomed!',
      rank:"fourth"
  },
  {
      id:5,
      img: benefit5,
      title: 'Global Academic Exposure',
      text:"Get exposed to Problems & Concepts taught across the World's Top Universities.",
      rank:"fifth"
  }

]