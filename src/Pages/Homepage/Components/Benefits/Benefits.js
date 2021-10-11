import React from 'react'
import AlternatingGrid from '../../../Components/Alternating-grid/AG'
import benefit1 from '../../../../Assets/benefits-desk/1.svg'
import benefit2 from '../../../../Assets/benefits-desk/2.svg'
import benefit3 from '../../../../Assets/benefits-desk/3.svg'
import benefit4 from '../../../../Assets/benefits-desk/4.svg'
import benefit5 from '../../../../Assets/benefits-desk/5.svg'
import './Benefits.css' 

function Benefits() {
    return (
        <div className="Benefits-UpContainer">
            <h1 className="Benefits-title" >Benefits as a Tutor</h1>
        <AlternatingGrid values={benefits} name={'Benefits'}/>
        </div>
    )
}

export default Benefits

const benefits =[
    {
        id: 1,
        img: benefit1,
        title: 'Crack Gate, IES, CAT & IAS',
        text:'Increase your chances by solving Objective to Conventional level questions & make money while doing so.'
    },
    {
        id:2,
        img: benefit2,
        title: 'Full Flexibility',
        text:'At Edufeat, you are in full control of your schedule. Take sessions when you like!'
    },
    {
        id:3,
        img: benefit3,
        title: 'Get Paid on Time',
        text:'Weekends Just Got 100 times better! Earn money every week & become Financially Independent.'
    },
    {
        id:4,
        img: benefit4,
        title: 'Become an Edufeatian',
        text:'Join the team of top tutors from IITs, NITs, and other reputed colleges. Bachelors to PHDs, everyone is welcomed!'
    },
    {
        id:5,
        img: benefit5,
        title: 'Global Academic Exposure',
        text:"Get exposed to Problems & Concepts taught across the World's Top Universities."
    }

]