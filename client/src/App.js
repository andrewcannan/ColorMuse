import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [data, setData] = useState()

  useEffect(() => {
    fetch("/hello").then(
      response => response.text()
    ).then(
      data => {
        setData(data)
      }
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
