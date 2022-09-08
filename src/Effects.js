import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Switch } from '@mui/material';

const hostURL = "http://192.168.8.152/";


export default function Effects()
{
    const [ isLoaded, setLoaded  ]  = useState(false);
    const [ effects,  setEffects ]  = useState(null);
    const [ expanded, setExpanded ] = useState("");
    const [ currentEffectIndex, setCurrentEffectIndex ] = useState(-1);

    const fetchData = (force) =>
    {
      if (!isLoaded || force)
      {
        fetch(hostURL + "getEffectList")
        .then(res => res.json())
        .then(json => {
          setLoaded(true);
          setEffects(json.Effects);
          setCurrentEffectIndex(json.currentEffect);
          
          const timer = window.setInterval(() => {
            fetchData() 
          }, 1000);
        
          return () => { 
            window.clearInterval(timer);
          }
        });  
      }
    }

    useEffect(() => 
    {
      fetchData();
    }, []);

    const handleChange =
    (panel) => (event, newIndex) => {
        console.log("INDEX: " + newIndex);
        fetch(hostURL + "/setCurrentEffectIndex?currentEffectIndex=" + newIndex, { method: 'PUT'})  
          .then(fetchData);
    };
       
    if (!isLoaded){
        return <div> Data is loading...</div>
    }
    else 
    {
        return (<div>
                { 
                effects.map((effect, index) => (
                    <Accordion id={index} expanded={currentEffectIndex === index} onChange={handleChange(index)}>
                        <AccordionSummary 
                            sx={{backgroundColor: currentEffectIndex === index ? '#D0E0FF;' : 'white' }} 
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
  
