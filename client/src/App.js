import React from 'react';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
