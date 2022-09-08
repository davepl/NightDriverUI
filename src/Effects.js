import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Switch } from '@mui/material';
import { red } from '@mui/material/colors';

const hostURL = "http://192.168.8.152/";


export default function Effects()
{
    const [ isLoaded, setLoaded  ]  = useState(false);
    const [ effects,  setEffects ]  = useState(null);
    const [ isExpanded, setExpanded ] = useState("");

    useEffect(() => 
    {
      // BUGBUG change to useState?
      if (!isLoaded)
      {
        fetch(hostURL + "getEffectList")
        .then(res => res.json())
        .then(json => {
          setEffects(json.Effects);
          setLoaded(true);
        });  
      }
    });

    const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
       
    if (!isLoaded){
        return <div> Data is loading...</div>
    }
    else 
    {
        return (<div>
                { 
                effects.map(effect => (
                    <Accordion  id={effect.name} expanded={isExpanded === effect.name} onChange={handleChange(effect.name)}>
                        <AccordionSummary 
                            sx={{backgroundColor: isExpanded === effect.name ? 'gray' : 'white' }} 
                            expandIcon={<ExpandMoreIcon />}
                            onClick={(event) => event.stopPropagation()} >
                            <Switch checked={effect.enabled} onClick={(event) => event.stopPropagation()}  />
                            <Typography align="left">{effect.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails  >
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))};
            </div>
           )
  }
}
  
