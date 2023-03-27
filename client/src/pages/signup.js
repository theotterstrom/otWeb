import React from 'react';
import { useState } from 'react';
import axios from "axios";
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function SignUpTabContent(){

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      userName: '',
      eMail: '',
      passWord: '',
      phoneNumber: '',
      dateOfBirth: null
    });
  
    const handleChange = (event) => {
      const { id, value } = event.target;
    
      if (id === 'dateOfBirth') {
  
        const date = new Date(value).toISOString();
      setFormData({
        ...formData,
        [id]: date
        });
      } else {
        setFormData({
          ...formData,
          [id]: value
        });
      
    };}
  
    const handleSubmit = (event) => {
      
      var fieldsFilled = $('#firstName').val() != "" && 
      $('#lastName').val() != "" && 
      $('#dateOfBirth').val() != "" && 
      $('#userName').val() != "" && 
      $('#eMail').val() != "" &&
      $('#phoneNumber').val() != "" &&
      $('#passWord').val() != "";
  
      event.preventDefault();
      if(!fieldsFilled){
        alert("All fields must be filled.");
      } else if($('#passWord').val() != $('#password2').val()){
        alert("Passwords don't match.");
      } else{
        axios.get(`http://localhost:8080/dnu180dn4d3d/${formData.userName}`)
        .then(response => {
          if(response.data.message === 'User not found.'){
            axios.post('http://localhost:8080/dnu180dn4d3d', formData)
              .catch(error => console.error(error + "jek"));
              alert("User created!");
              window.location.reload();
          } else {
            alert("Username taken.");
          }
        })
        .catch(error => {
          alert("Cannot create user.");
        });
      }
    };
  
  return <>
  <h2>Create Account</h2>     
  <div className='line col-lg-6 col-8 container-fluid mt-3 mb-4'></div>
          <div className='container-fluid col-lg-10 col-12 p-0'>
  
          <form onSubmit={handleSubmit}> 
          
          <h3 className='text-lg-start text-sm-center container-fluid col-11 mt-5 mb-4 p-0'>Personal details</h3>
          
          <div className='container-fluid col-12'>
              <div className='row'> 
                <div className='col-lg-6 col-12 text-start'>
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" className="form-control mt-2" id="firstName" defaultValue={formData.firstName} onChange={handleChange}/>
                </div>
                <div className='col-lg-6 col-12 text-start mt-lg-0 mt-2'>
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control mt-2" id="lastName" defaultValue={formData.lastName} onChange={handleChange}/>
                </div>
              </div>
            </div>
  
            <div className='container-fluid col-12 mt-lg-4 mt-2'>
              <div className='row'>
                <div className='col-lg-6 col-12 text-start'>
                <label htmlFor="dob">Date of birth</label>
                <input type="date" max="2013-12-31" className="form-control mt-2" id="dateOfBirth" defaultValue={formData.dateOfBirth} onChange={handleChange}/>
                </div>
              </div>
            </div>
  
          <h3 className='text-lg-start text-sm-center container-fluid col-11 mt-5 mb-4 p-0'>Account details</h3>
  
          <div className='container-fluid col-12'>
              <div className='row'> 
                <div className='col-lg-6 col-12 text-start'>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control mt-2" id="userName" defaultValue={formData.userName} onChange={handleChange}/>
                </div>
                <div className='col-lg-6 col-12 text-start mt-lg-0 mt-2'>
                <label htmlFor="email">E-mail</label>
                <input type="text" className="form-control mt-2" id="eMail" defaultValue={formData.eMail} onChange={handleChange}/>
                </div>
              </div>
            </div>
  
            <div className='container-fluid col-12 mt-lg-4 mt-2'>
              <div className='row'>
                <div className='col-lg-6 col-12 text-start'>
                <label htmlFor="phonenumber">Phone-number</label>
                <input type="text" className="form-control mt-2" id="phoneNumber" defaultValue={formData.phoneNumber} onChange={handleChange}/>
              </div>
            </div>
            </div>
  
          <div className='container-fluid col-12 mt-lg-4 mt-5'>
              <div className='row'> 
                <div className='col-lg-6 col-12 text-start'>
                <label htmlFor="password1">Password</label>
                <input type="password" className="form-control mt-2" id="passWord" defaultValue={formData.passWord} onChange={handleChange}/>
                </div>
                <div className='col-lg-6 col-12 text-start mt-lg-0 mt-2'>
                <label htmlFor="password2">Comfirm password</label>
                <input type="password" className="form-control mt-2" id="password2" name="password2" />
                </div>
              </div>
            </div>
  
          <button type="submit" className="btn btn-primary mt-4">Create Account</button>
          </form>
          </div>
  </>;
  }

function SignUpPage(){
return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='tabContainer justify-content-between col-12'>
            
            <Link to="../login"><button className='tab'>Log In</button></Link>
            <button className='tab'>Create Account</button>
            
            </div>
        <div className='col-lg-6 col-11 container-fluid mainPage mb-5 mt-5'>
        <div><SignUpTabContent/></div>
        </div>
        </div>
        
    </div>
    );
};
  

  export default SignUpPage;