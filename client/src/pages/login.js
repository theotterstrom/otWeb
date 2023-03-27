import React from 'react';
import { useState } from 'react';
import axios from "axios";
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function LoginTabContent(){
  const [user, setUser] = useState(null);
  
  const handleLogin = (event) =>{
    event.preventDefault();
    const userNameVal = document.getElementById('usernamelogin').value;
    const passWordVal = document.getElementById('passwordlogin').value;
    
    if(userNameVal != "" && passWordVal != ""){
    axios.get(`http://localhost:8080/dnu180dn4d3d/${userNameVal}`)
    .then(response => {
      if(response.data.passWord != passWordVal){
        alert("Log in failed.");
      }else{
        alert("Log in successful!");
        setUser(response.data);
        document.location.reload();
      }
    })
    .catch(error => {
      alert("Log in failed.");
    });
  }else{
    alert("Please fill both fields.");
  }
  };

return <>
<h2>Log In</h2>     
<div className='line col-lg-6 col-8 container-fluid mt-3 mb-4'></div>
  <div className='container-fluid col-lg-8 col-12'>
  <form onSubmit={handleLogin}>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control mt-2" id="usernamelogin" name="username" />
  </div>
  <div className="form-group mt-4">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control mt-2" id="passwordlogin" name="password" />
  </div>
  <button type="submit" className="btn btn-primary mt-4">Login</button>
</form>
</div>
</>;
}

function LoginPage(props) {

    return (
        <div className='container-fluid'>
          <div className='row'>
          <div className='tabContainer justify-content-between col-12'>
                
                <button className='tab'>Log In</button>
                <Link to="../signup"><button className='tab'>Create Account</button></Link>
                
              </div>
            <div className='col-lg-6 col-11 container-fluid mainPage mb-5 mt-5'>
            <div><LoginTabContent/></div>
            </div>
          </div>
          
        </div>
      );
  };

  export default LoginPage;