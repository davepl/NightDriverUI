import React, { Component } from "react";
import Chart from "react-google-charts";
import { Memory } from "../node_modules/@mui/icons-material/index";
import MemoryTable from "./MemoryTable";

const options = {
  width: 600,
  height: 200,
  greenFrom: 24,
  yellowFrom: 20,
  yellowTo: 24,
  redFrom: 0,
  redTo:20,
  greenTo: 60,
  max: 60,
  minorTicks: 5,
  chartArea: { width: "80%", align: "center" }
};

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

  lastval = 0;

  getData = () => {
    return [
      ["Label", "Value"],
      ["LEDs", this.state.LED_FPS],
      ["Audio", this.state.AUDIO_FPS],
      ["Serial", this.state.SERIAL_FPS]
    ];
  };

  componentWillUnmount() 
  {
    if (this.intervalID === null) return;
      clearInterval(this.intervalID);
  }

  componentDidMount() 
  {
      fetch(hostURL + "getStatistics")
          .then(res => res.json())
          .then(json => 
            {
              this.setState({
                  isLoaded: true,
                  statistics: json,
              });        
              this.setState(state => {
                return {
                  ...state,
                  LED_FPS:    json["LED_FPS"],
                  AUDIO_FPS:  json["AUDIO_FPS"],
                  SERIAL_FPS: json["SERIAL_FPS"]
                };
              });
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
          <h3>Refresh Rates</h3>
          <p>Frames Per Second</p>
          <div align='center'>
            <Chart
              chartType="Gauge"
              data={this.getData()}
              options={options}
            />
          </div>
          <h3>Memory</h3>
          <div align='center'>
            <MemoryTable rows={statistics}/>
          </div>

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