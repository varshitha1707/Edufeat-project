import React from 'react'
import img2016 from '../../../../Assets/Timeline/2016.svg'
import img2017 from '../../../../Assets/Timeline/2017.svg'
import img2018 from '../../../../Assets/Timeline/2018.svg'
import img2019 from '../../../../Assets/Timeline/2019.svg'
import img2020 from '../../../../Assets/Timeline/2020.svg'
import imgpresent from '../../../../Assets/Timeline/present.svg'
import imgtimeline from '../../../../Assets/Timeline/timeline.png'
import Tilt from 'react-tilt'
import './Timeline.css' 

function Timeline() {
    const dates = [
        {
            id: 1,
            img: img2016,
        },
        {
            id: 2,
            img: img2017,
        },
        {
            id: 3,
            img: img2018,
        },
        {
            id: 4,
            img: img2019,
        },
        {
            id: 5,
            img: img2020,
        },
        {
            id: 6,
            img: imgpresent,
        },
    ]

    const texts = [
        {
            id: 1,
            text: '“Started , Edufeat !”',
        },
        {
            id: 2,
            text: '“Got more than 100+ tutors!”',
        },
        {
            id: 3,
            text: '“Put up new subjects in mechanical engineering.”',
        },
        {
            id: 4,
            text: '“Grandized Edufeat family!!”',
        },
        {
            id: 5,
            text: '“Got more students and tutors! ”',
        },
        {
            id: 6,
            text: '“Growing....”',
        },
    ]

    return (
        <div className="Timeline">
            <div className="Timeline-title">
                <p>Our Timeline</p>
            </div >
            <div className="Timeline-dates">
                <div className="dates">
                {dates.map(date => (
                    <Tilt options={{ max : 25 }} key={date.id}>
                        <div id="dateimg-cont">
                            <img src={date.img} id="date-img" />
                        </div>
                    </Tilt>
                ))}
                </div>
                <div className="line">
                    <img src={imgtimeline} id="timeline-line"  />
                </div>
                <div className="texts">
                {texts.map(text => (
                    <div key={text.id} id="text-cont">
                        <p>{text.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline
