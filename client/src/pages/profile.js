import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

function ProfilePage() {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-11 container-fluid mainPage mb-5'>
            <h2>Profile</h2>
            <div className='line col-lg-6 col-8 container-fluid mt-3 mb-4'></div>

            <h3 className="text-lg-start text-sm-center container-fluid col-10 mt-lg-5 mt-5 mb-3">Personal details</h3>

             <div className='container-fluid col-lg-10 col-12'>
              <div className='row'>
                <div className='col-lg-6 col-12 text-start'>
                <div>First name</div>
                <div className='profileTextBox mt-1'></div>
                </div>
                <div className='col-lg-6 col-12 text-start'>
                  <div>Last name</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <div className='container-fluid col-lg-10 col-12 mt-2 mt-lg-4'>
              <div className='row'>
                <div className='col-lg-6 col-12 text-start'>
                <div>Date of birth</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <h3 className='text-lg-start text-sm-center container-fluid col-10 mt-5 mb-3'>User details</h3>
            <div className='container-fluid col-lg-10 col-12'>
              <div className='row'>
                <div className='col-lg-6 col-12 text-start'>
                <div>User-id</div>
                <div className='profileTextBox mt-1'></div>
                </div>
                <div className='col-lg-6 col-12 text-start'>
                  <div>E-mail</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>
            

            <div className='container-fluid col-lg-10 col-12 mt-2 mt-lg-4'>
              <div className='row'>
                <div className='col-lg-6 col-12 text-start'>
                <div>Phone number</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <div className='container-fluid col-lg-8 col-12 mt-5'>
              <div className='row'>
              <div className='col-6'>
              <button className='btn btn-primary'>Change details</button>
              </div>
              <div className='col-6'>
              <button className='btn btn-primary'>Change password</button>
              </div>
              </div>
            </div> 

          </div>
        </div>
      </div>
    );
  }

  export default ProfilePage;