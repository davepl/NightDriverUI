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
import Button from '@material-ui/core/Button';
class Main extends Component 
{
    render() {
        return (
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
                            <Route path="/" element={<Home />} />
                            <Route path="/effects" element={<Effects />} />
                            <Route path="/statistics" element={<Statistics />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </BrowserRouter>
        );
    }
}

export default Main;