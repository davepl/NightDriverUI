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
import { createTheme }   from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {blue} from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

class Main extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <h1>NightDriver LED</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/effects">Effects</NavLink></li>
              <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
          </div>
          <div className="content">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/effects" element={<Effects/>}/>
            <Route path="/settings" element={<Settings/>}/>
          </Routes>    
          <Button variant="contained">Hello</Button>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
 
export default Main;