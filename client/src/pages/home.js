import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';



function HomePage() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-11 container-fluid mainPage'>
            <div className='col-8'>
              <img id='homePagePP' src='../static/media/pp.jpg' />
            </div>
            <p>Hello, I am Lukas Otterström!</p>
          </div>
        </div>
      </div>
    );
  }

  export default HomePage;