import React from 'react';
import './App.css';
import  Navbar from"../src/layout/navbar/Navbar"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "../src/layout/home/Home"
import Employee from "../src/components/employee/Employee"
import About from "../src/components/about/About"
import Contact from "../src/components/contact/Contact"
import Login from "../src/user/login/Login"
import Register from "../src/user/register/Register"
import Profile from "../src/user/profile/Profile"

const App = () => {
  return (
    <React.Fragment>
      <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/employees' Component={Employee}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/profile' Component={Profile}/>
      </Routes>
      </Router>
      </div>
    </React.Fragment>
  )
}

export default App;
