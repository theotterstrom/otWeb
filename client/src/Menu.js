import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {windowListener, burgerClick} from './scripts/myscripts.js';
import { useEffect } from 'react';
import $ from 'jquery';
import {changeContent} from './pages/login.js';


function Menu(props) {
  const closeBurgerMenu = () => {
    
    $('#phoneBarMenu').css('height', '0');
  };

  useEffect(()=>{
    windowListener();
    burgerClick();
    
  });
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 menuBar'>
          <div id="compBar">
            <Link to="./"><button className='menuBut'>Home</button></Link>
            <Link to="./profile"><button className='menuBut'>Profile</button></Link>
            <Link to="./signup"><button className='menuBut'>Create Account</button></Link>
            <Link to="./login"><button className='menuBut'>Log In</button></Link>
            
          </div>
          <div id="phoneBar">
            <div id="burger" >
            <div className="patty"></div>
            <div className="patty"></div>
            <div className="patty"></div>
            </div>
            <div id="phoneBarMenu" className='d-flex flex-column align-items-center'>
              <Link to="./"><button className="menuBut pt-5" onClick={closeBurgerMenu}>Home</button></Link>
              <Link to="./profile"><button className="menuBut" onClick={closeBurgerMenu}>Profile</button></Link>
              <Link to="./signup"><button className="menuBut" onClick={()=>{closeBurgerMenu();}}>Create Account</button></Link>
              <Link to="./login"><button className="menuBut pb-5" onClick={()=>{closeBurgerMenu();}}>Log In</button></Link>
            
            
            </div>
            </div>   
        </div>
        
      </div>
    </div>
  );
}

export default Menu;