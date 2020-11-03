import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemListContainer/ItemDetails/ItemDetailsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const [items, setItems] = useState([]);

  const products = [{name:"Tostadora", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat, tempora voluptates repellendus dolorum eveniet tenetur porro rem! Voluptate amet error deleniti assumenda quo! Totam expedita culpa delectus obcaecati veritatis.", photo: "https://www.tiomusa.com.ar/imagenes/archivos/2017-02/140-13746-tostadoraoster6544blanco1tm.png", price: 20, id: 1} ,
    {name:"Cocina", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat, tempora voluptates repellendus dolorum eveniet tenetur porro rem! Voluptate amet error deleniti assumenda quo! Totam expedita culpa delectus obcaecati veritatis.", photo: "http://whirlpool-latam.s3.amazonaws.com/wp-content/uploads/2020/07/WF976-1-3.jpg", price: 20, id: 2},
    {name:"Batidora", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat, tempora voluptates repellendus dolorum eveniet tenetur porro rem! Voluptate amet error deleniti assumenda quo! Totam expedita culpa delectus obcaecati veritatis.", photo: "https://http2.mlstatic.com/batidora-planetaria-amasadora-bowl-5-lts-winco-vintage-700-w-D_Q_NP_874813-MLA40832749202_022020-F.webp", price: 20, id: 3},
    {name:"Pava Electrica", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quaerat, tempora voluptates repellendus dolorum eveniet tenetur porro rem! Voluptate amet error deleniti assumenda quo! Totam expedita culpa delectus obcaecati veritatis.", photo: "https://www.tienda.philips.com.ar/1940-large_default/pava-electrica-philips-viva-collection-blanca-con-termostato.jpg", price: 20, id: 4}];
  
  const itemsPromise = new Promise((res) => {setTimeout(() => {res(products)}, 2000)});


  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/item/:id">
            <ItemDetailsContainer {...{itemsPromise}}></ItemDetailsContainer>
          </Route>
          <Route path="/cart">
            
          </Route>
          <Route exact path="/">
            <ItemListContainer items={items} onFetch={setItems} {...{itemsPromise}} titulo="DESTACADO"/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
