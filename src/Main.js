import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
 
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="content">
        <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/stuff" element={<Stuff/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>             
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Main;