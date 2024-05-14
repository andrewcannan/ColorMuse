import React from 'react';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import FileUpload from './components/fileUpload/fileUpload';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/generate' element={<FileUpload />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
