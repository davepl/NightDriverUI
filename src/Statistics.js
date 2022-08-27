import React, { Component } from "react";

const hostURL = "http://192.168.8.152/";

class Statistics extends Component 
{
  constructor(props)
  {
      super(props);
      this.state = {
          statistics: null,
          isLoaded: false
      }
  }

  componentDidMount() 
  {
    fetch(hostURL + "getStatistics")
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                statistics: json,
            })
        });
  }

  render() 
  {
    var { isLoaded, statistics } = this.state;

    if (!isLoaded)
    {
      return <div> Data is loading...</div>
    }
    else 
    {
      return ( <div>
          <h2>STATISTICS</h2>
          <p>Stats:</p>
          <ol>
            <li>FPS: {statistics["LED_FPS"]}</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
  }
}
 
export default Statistics;