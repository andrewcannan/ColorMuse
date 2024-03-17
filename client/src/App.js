import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    fetch("/hello").then(
      res => res.text()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { data }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
