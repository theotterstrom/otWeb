import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Menu(props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 menuBar'>
          <Link to="./"><button className='menuBut'>Home</button></Link>
          <Link to="./profile"><button className='menuBut'>Profile</button></Link>
          <Link to="./login"><button className='menuBut'>Create Account</button></Link>
          <Link to="./login"><button className='menuBut'>Log In</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;