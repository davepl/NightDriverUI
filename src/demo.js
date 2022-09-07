import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const hostURL = "http://192.168.8.152/";


export default function Demo()
{
    useEffect(() => 
    {
      // BUGBUG change to useState?

      fetch(hostURL + "getEffectList")
      .then(res => res.json())
      .then(json => {
        setEffects(json.Effects);
        setLoaded(true);
      });      
    });

    const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const [ isLoaded, setLoaded  ]  = useState(false);
    const [ effects,  setEffects ]  = useState(null);
    const [ isExpanded, setExpanded ] = useState("");
        
    if (!isLoaded){
        return <div> Data is loading...</div>
    }
    else 
    {
        return (<div>
                <h2>Available Effectsss</h2>
                { effects.map(effect => (
                    <Accordion id={effect.name} expanded={isExpanded === effect.name} onChange={handleChange(effect.name)}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                          General settings
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                          Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                ))};
            </div>
           )
  }
}
  
