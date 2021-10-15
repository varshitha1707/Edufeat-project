import React from 'react'
import one from '../../../../Assets/TypesOfWork/1.svg'
import two from '../../../../Assets/TypesOfWork/2.svg'
import three from '../../../../Assets/TypesOfWork/3.svg'
import AlternatingGrid from '../../../../Components/Alternating-grid/AG';
import './ToW.css'

const  Tow = () => {

   

    return (
        <div className="ToW-UpContainer">
            {/* title */}
            <h1 className="ToW-title" >Types of Work</h1>
            {/* subtitle */}
            <h3 className="ToW-subtitle">The nature of work varies from Simple Questions to <br/> Project & Lab reports.</h3>
            {/* alternating grid which maps the value */}
            <AlternatingGrid values={ToW} name={'ToW'}/>
        </div>
    )
}

export default Tow

// Data to be mapped
const ToW = [
    {
        id: 1,
        img:one,
        title:'Written Help',
        titlecol:'#407AFF',
        text:'You have to finish the work and submit it within the due date and time.The session can be about solving a set of questions, making a project or a lab report, essay writing.Work should be done according to the format provided by us and must be Plagiarism free.'
    },
    {
        id: 2,
        img:two,
        title:'Live One on One Session',
        titlecol:'#00E29E',
        text:'Subject specific questions need to be done on the spot within the informed time slot. Prepare for the session beforehand for better performance.The method should be the same as the materials provided to help the student understand easily.'
    },
    {
        id:3,
        img:three,
        title:'Textbook Solutions',
        titlecol:'#FF6D3C',
        text:'Subject specific questions need to be done on the spot within the informed time slot.Prepare for the session beforehand for better performance.The method should be the same as the materials provided to help the student understand easily.'
    }
]