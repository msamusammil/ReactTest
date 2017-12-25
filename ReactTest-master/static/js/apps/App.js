import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from './actions/cartActions';
import * as ActionCreators from './actions/productActions';
import Products from './components/Products';
import Cart from './components/Cart';
import { toJS } from 'immutable';

// import '../../css/main.css';

/**
 * We could choose to connect the App component or not. It depends on what you want to do,
 * in this example we choose to connect the two components below to illustrate how we can connect
 * multiple component to the same store and data. So this component is "regular".
 */
class App extends Component {
  
  render() { 

    console.log('App',);  

    return (
      <div className="container">
        <Cart/>
        <h1>Products</h1>
        <Products />
      </div>
    );
  }
}

export default App;
