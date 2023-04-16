import React from 'react';
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';

import Services from './pages/services';
import Doctors from './pages/doctor';
import Departments from './pages/dept';

function App() {
 return (
 
    <Router>
    <Switch>
  

   
   
    <Route path="/services"  component={Services}/>
    <Route path="/doctor"  component={Doctors}/>
    <Route path="/dept"  component={Departments}/>
    <Route path="/contact"  component={Contact}/>
    <Route path="/about"  component={About}/>
     
      <Route path="/"  component={Home}/>
     
  </Switch>
</Router>
 )
}

export default App;