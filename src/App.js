import React from 'react';
import Title from './components/Title.js';
import ReactLink from './components/ReactLink.js';
import Img from './components/Img.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Img />
        <Title />
        <ReactLink />
      </header>
    </div>
  );
}

export default App;
