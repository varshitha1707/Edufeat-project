import React, { useState } from 'react'
import { motion,AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn"



const initial={
    opacity:0,
    x:-10
}
const animate={
    opacity:1

}
const exit={
    x:0
}

const transition={
    x:{type:'spring',stiffness:300,damping:200},
    opacity:{duration:3},
    // yoyo:Infinity
}
export default function Slider() {
    const [ [current,direction], setCurrent ] = useState([0,0])
    const imageIndex = wrap(0,images.length,current)
    const updateCarousel = setDirection => {
        setCurrent([current+setDirection,setDirection])
    }
    console.log(images[imageIndex]);
    // const animation={
    //     updateCarousel(1),
    //     repeat:Infinity,

    // }
    return (
        <div onChange={()=>updateCarousel(1)}>
            <AnimatePresence 
            initial={initial}
            custom={direction}
            >
            <motion.img
            // variants={vari}
            key={current}
            src={images[imageIndex].image}
            custom={direction}
            initial={initial}
            animate={animate}
            exit={exit}
            // transition={transition}
            loading="eager"
            // whileHover={{scale:1.1, rotate:360, yoyo: Infinity}}
            // whileHover={ {scale:1.1,repeat: Infinity}}
            >

            </motion.img>
            </AnimatePresence>

            {/* <div>
                <button
                onClick={()=>updateCarousel(-1)}
                >
                    left
                </button>
                <button
                onClick={()=>updateCarousel(1)}
                >
                    right
                </button>
            </div> */}
        </div>
    )
}


const images = [
    {image:'https://picsum.photos/id/237/200/300'},
    {image:'https://picsum.photos/id/236/200/300'},
    {image:'https://picsum.photos/id/235/200/300'},
    {image:'https://picsum.photos/id/234/200/300'},
    {image:'https://picsum.photos/id/233/200/300'},
]