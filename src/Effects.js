import React, { Component } from "react";
import { Accordion, AccordionSummary, Typography, AccordionDetails, Switch } from "../node_modules/@material-ui/core/index";
import { ExpandMore } from "../node_modules/@mui/icons-material/index";


const hostURL = "http://192.168.8.152/";

class Effects extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            effects: [],
            isLoaded: false
        }
    }
    
    componentDidMount()
    {
        fetch(hostURL + "getEffectList")
            .then(res => res.json())
            .then(json => {
               this.setState({
                isLoaded: true,
                effects: json.Effects,
               }) 
            });
    }
    
    render() 
    {
        var { isLoaded, effects } = this.state;
        
        if (!isLoaded){
            return <div> Data is loading...</div>
        }
        else {
            return (
                <div>
                    <h2>Available Effects</h2>
                    { effects.map(effect => (

                    <Accordion id="accordian" >
                        <AccordionSummary 
                            aria-controls="panel1a-content"
                            expandIcon={<ExpandMore/>}
                            id="panel1a-header"
                            onClick="$event.stopPropagation();">
                            <Switch checked={effect.enabled} onClick="$event.stopPropagation();" />
                            <Typography>{effect.name}</Typography>
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
            );
        }
    }
}

export default Effects;