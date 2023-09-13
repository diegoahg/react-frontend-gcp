import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/text');
        const data = await response.json();
        setText(data.text);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {text}
        </a>
      </header>
    </div>
  );
}

export default App;
