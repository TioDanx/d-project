import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  let available = 10; 
  const handleAdd = (counter) => {

     

       return () => {
         if(counter < available){
          alert(`se van a agregar ${counter} items a su carrito` );
         }
         else alert("Por favor quite items" );
       }
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="DESTACADO"/>
      <br />
      <ItemCount onAdd={handleAdd} initial={15} available={available}/>
    </div>
  );
}

export default App;
