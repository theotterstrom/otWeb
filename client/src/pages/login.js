import React from 'react';
import '../index.css';
import { useState } from 'react';
import axios from "axios";
import $ from 'jquery';

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
  }
  };

return <>
<h2>Log In</h2>     
  <div className='line container-fluid mt-3 mb-4'></div>
  <div className='container-fluid col-8'>
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
            .catch(error => console.error(error));
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
  <div className='line container-fluid mt-3 mb-4'></div>
        <div className='container-fluid col-8'>

        <form onSubmit={handleSubmit}> 
        <h3 className='text-start container-fluid col-12 mt-5 mb-4 p-0'>Personal details</h3>
        <div className="row">
            <div className="form-group col-md-6 text-start">
            <label htmlFor="firstname">First Name</label>
            </div>
            <div className="form-group col-md-6 text-start">
            <label htmlFor="lastname">Last Name</label>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-6">
            <input type="text" className="form-control mt-2" id="firstName" defaultValue={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="form-group col-md-6">
            <input type="text" className="form-control mt-2" id="lastName" defaultValue={formData.lastName} onChange={handleChange}/>
            </div>
        </div>

        <div className="row mt-4">
            <div className="form-group col-md-6 text-start">
            <label htmlFor="dob">Date of birth</label>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-6">
            <input type="date" max="2013-12-31" className="form-control mt-2" id="dateOfBirth" defaultValue={formData.dateOfBirth} onChange={handleChange}/>
            </div>
        </div>

        <h3 className='text-start container-fluid col-12 mt-5 mb-4 p-0'>Account details</h3>
        <div className="row">
            <div className="form-group col-md-6 text-start">
            <label htmlFor="username">Username</label>
            </div>
            <div className="form-group col-md-6 text-start">
            <label htmlFor="email">E-mail</label>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-6">
            <input type="text" className="form-control mt-2" id="userName" defaultValue={formData.userName} onChange={handleChange}/>
            </div>
            <div className="form-group col-md-6">
            <input type="text" className="form-control mt-2" id="eMail" defaultValue={formData.eMail} onChange={handleChange}/>
            </div>
        </div>

        <div className="row mt-4">
            <div className="form-group col-md-6 text-start">
            <label htmlFor="phonenumber">Phone-number</label>
            </div>
            
        </div>
        <div className="row">
            <div className="form-group col-md-6">
            <input type="text" className="form-control mt-2" id="phoneNumber" defaultValue={formData.phoneNumber} onChange={handleChange}/>
            </div>
            
        </div>

        <div className="row mt-4">
            <div className="form-group col-md-6 text-start">
            <label htmlFor="password1">Password</label>
            </div>
            <div className="form-group col-md-6 text-start">
            <label htmlFor="password2">Comfirm password</label>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-6">
            <input type="password" className="form-control mt-2" id="passWord" defaultValue={formData.passWord} onChange={handleChange}/>
            </div>
            <div className="form-group col-md-6">
            <input type="password" className="form-control mt-2" id="password2" name="password2" />
            </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">Create Account</button>
        </form>
        </div>
</>;
}
function LoginPage() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleTabClick = (tabName) => {
    setCurrentPage(tabName);
  };

  let content;
   
  switch (currentPage) {
    case 'login':
      content = <LoginTabContent />;
      break;
    case 'sign up':
      content = <SignUpTabContent />;
      break;
    default:
      content = null;
  }
    return (
        <div className='container-fluid'>
          <div className='row'>
          <div className='tabContainer justify-content-between col-12'>
                <div className='row justify-content-between'>
                <button className='tab col-4' onClick={() => handleTabClick('login')}>Log In</button>
                <button className='tab col-8' onClick={() => handleTabClick('sign up')}>Create Account</button>
                </div>
              </div>
            <div className='col-6 mainPage'>
            <div>{content}</div>
            </div>
          </div>
        </div>
      );
  }

  

  export default LoginPage;