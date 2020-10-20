import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
    </div>
  );
}

export default App;
