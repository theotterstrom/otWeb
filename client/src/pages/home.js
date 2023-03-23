import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import '../index.css';

function HomePage() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6 mainPage'>
            <p>Hello, this is the home page</p>
          </div>
        </div>
      </div>
    );
  }

  export default HomePage;