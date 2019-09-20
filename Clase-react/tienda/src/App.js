import React from 'react';

import './styles/App.scss'

import MainHeader from './components/MainHeader/MainHeader';
import ProductPreview from './components/Product/ProductPreview/ProductPreview';
import Home from './components/Home/Home';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <MainHeader/>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
