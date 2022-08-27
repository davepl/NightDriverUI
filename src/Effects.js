import React, { Component } from "react";

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
                    <h2>Effects</h2>
                    <ul>
                        { effects.map(effect => (
                            <li>{effect.name}</li>
                        ))};
                    </ul>
                </div>
            );
        }
    }
}

export default Effects;