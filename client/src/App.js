import React, { useState } from 'react';
import Menu from './Menu';
import ProfilePage from './pages/profile';
import HomePage from './pages/home';
import LoginPage from './pages/login'
import $ from 'jquery';
import axios from "axios";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      
      <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;