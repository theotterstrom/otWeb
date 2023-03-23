import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import '../index.css';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

function ProfilePage() {

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6 mainPage'>
            <h2>Profile</h2>
            <div className='line container-fluid mt-3 mb-4'></div>

            <h3 className='text-start container-fluid col-8 mt-5 mb-3'>Personal details</h3>
            <div className='container-fluid col-8'>
              <div className='row'>
                <div className='col-6 text-start'>
                <div>First name</div>
                <div className='profileTextBox mt-1'></div>
                </div>
                <div className='col-6 text-start'>
                  <div>Last name</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <div className='container-fluid col-8 mt-4'>
              <div className='row'>
                <div className='col-6 text-start'>
                <div>Date of birth</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <h3 className='text-start container-fluid col-8 mt-5 mb-3'>User details</h3>
            <div className='container-fluid col-8'>
              <div className='row'>
                <div className='col-6 text-start'>
                <div>User-id</div>
                <div className='profileTextBox mt-1'></div>
                </div>
                <div className='col-6 text-start'>
                  <div>E-mail</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <div className='container-fluid col-8 mt-4'>
              <div className='row'>
                <div className='col-6 text-start'>
                <div>Phone number</div>
                <div className='profileTextBox mt-1'></div>
                </div>
              </div>
            </div>

            <div className='container-fluid col-6 mt-5'>
              <div className='row'>
              <div className='col-6'>
              <button>Change details</button>
              </div>
              <div className='col-6'>
              <button>Change password</button>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  export default ProfilePage;