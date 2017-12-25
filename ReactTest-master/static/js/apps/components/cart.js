import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { toJS } from 'immutable';

class Cart extends Component {
  render() {
    /**
     * this.props.cart is populated through the redux store and mapStateToProps
     * this.props.removeFromCart is added through mapDispatchToProps
     */
    const cartList = this.props.cart.map(( item, index) =>{
      return <div className="item  col-xs-4 col-lg-4 grid-group-item" key={index}>
            <div className="thumbnail">
          <img className="group list-group-image" src={item.imageURL} alt="" />
          <div className="caption">
              <h4 className="group inner list-group-item-heading">
                  {item.name}</h4>
              <div className="row">
                  <div className="col-xs-12 col-md-6">
                      <p className="lead">
                          {item.currency}{item.price}</p>
                  </div>
                  <div className="col-xs-12 col-md-6">
                      <button className="btn btn-success"  
                          onClick={() => this.props.removeFromCart(item)}>
                            Remove
                    </button> 
                    
                  </div>
              </div>
          </div>
      </div>
  </div>
    });
    let sum = 0;
     sum = this.props.cart.reduce(function(sum, elem) {
      return sum + elem.price;
  }, 0);
    return (
      <div>
        <h1>Cart Details</h1>
        <div className="row">
        <button type="button" className="btn btn-primary">Cart Total Value <span className="badge">${sum}</span></button>
        </div>
        <div  className="row">
          {cartList}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
