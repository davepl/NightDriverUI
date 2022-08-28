import React, { Component } from "react";
import {
    Route,
    Routes,
    NavLink,
    BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Settings from "./Settings";
import Effects from "./Effects";
import Statistics from "./Statistics";
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const hostURL = "http://192.168.8.152/";

class Main extends Component 
{
    componentDidMount() {
        fetch(hostURL + "getEffectList")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    effects: json.Effects,
                })
            });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Button variant="contained" color="primary">Hello</Button>

                    <div>
                        <h1>NightDriver LED</h1>
                        <ul className="header">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/effects">Effects</NavLink></li>
                            <li><NavLink to="/statistics">Statistics</NavLink></li>
                            <li><NavLink to="/settings">Settings</NavLink></li>
                        </ul>
                    </div>
                    <div className="content">
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/effects" element={<Effects />} />
                            <Route path="/statistics" element={<Statistics />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default Main;