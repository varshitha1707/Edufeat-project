import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './FAQs.css'

  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      {...props}
    />
  ))(({ theme }) => ({
    //   alternate colours for the accordion implementation
    backgroundColor: '#F3F6F9',
    flexDirection: 'row',
    '& .MuiAccordionSummary-content': {
      margin: theme.spacing(1),
      textAlign: 'center',
    //   align the text to center
    },
  }));
  

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

export default function FAQ() {
  
  // function to see if expanded or not
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container id="FAQs-container">
        <h1 id="FAQs-title">FAQ'S</h1>
      {
        FAQs.map((faq)=>{
          return(
            // Accordian starts here
            <Accordion key={faq.id} disableGutters elevation={0} id="Accordion" expanded={expanded === faq.panel} onChange={handleChange(faq.panel)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{right:"0"}}/>}
                id="AccordionSummary" width="100%"
              >
              {/* Accordian title */}
                <div id="FAQs-acc-title">
                    <h3>{faq.title}</h3>
                </div>
              </AccordionSummary>
              <AccordionDetails >
              {/* Accordian text */}
                <h4 id="FAQs-acc-text">{faq.text}</h4>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </Container>
  );
}


// faqs data to be mapped to the accordion
const FAQs =[
    {
        id:1,
        title:"What is average salary per month working as tutor here?",
        text:"Something Something Something",
        panel:'panel1',
    },
    {
        id:2,
        title:"How many hours the work can be ?",
        text:"Something Something Something",
        panel:'panel2',
    },
    {
        id:3,
        title:"Are the working hours flexible?",
        text:"Something Something Something",
        panel:'panel3',
    },
    {
        id:4,
        title:"Does the solutions needs to be plagirism free?",
        text:"Something Something Something",
        panel:'panel4',
    },
    {
        id:5,
        title:"Can we leave the work anytime if needed?",
        text:"Something Something Something",
        panel:'panel5',
    }
  ]
