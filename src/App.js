import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './components/ItemDetails/ItemDetailsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {

  return (
    <CartProvider defaultCart={[]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/item/:id">
            <ItemDetailsContainer></ItemDetailsContainer>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/:category">
            <ItemListContainer />
          </Route>
          <Route exact path="/">
            <ItemListContainer titulo="DESTACADO" />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
