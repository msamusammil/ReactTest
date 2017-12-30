import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromCart } from '../actions/cartActions';

class Cart extends Component {


componentWillReceiveProps(nextprops) {
    if(nextprops.cart.length !== this.props.cart.length)
        {
            window.scrollTo(0,0);
        }

}
render() {
    /**
     * this.props.cart is populated through the redux store and mapStateToProps
     * this.props.removeFromCart is added through mapDispatchToProps
     */
    const cartList = this.props.cart && this.props.cart.length > 0 ? this.props.cart.map(( item, index) =>{
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
    }) : 'No Items in your cart.';
    let sum = 0;
     sum = this.props.cart && this.props.cart.reduce(function(sum, elem) {
      return sum + elem.price;
  }, 0);
    let count = 0;
    count = this.props.cart && this.props.cart.length;
    return (
        <div className="row">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Cart Details:  Total: ${sum} | Count: {count}</h3>
                </div>
                <div className="panel-body">
                    <div className="row text-center">
                        {cartList}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
Cart.propTypes = {
    cart: PropTypes.array,
    removeFromCart: PropTypes.func,
    
  };
function mapStateToProps(state) {
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
