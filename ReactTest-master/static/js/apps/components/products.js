import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addToCart } from '../actions/cartActions';
import * as ActionCreators from '../actions/productActions';

class Products extends Component {

  constructor(props){
    super(props);
    
    this.props.actions.getProducts();
  }
  render() {
    const productList = this.props.products.products && this.props.products.products.map( (item,index)  => {
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
                          onClick={() => this.props.addToCart(item)}>
                            Add To Cart
                    </button> 
                    
                  </div>
              </div>
          </div>
      </div>
  </div>
    });

    return (
      <div className= "row">
        <div className="panel panel-primary">
            <div className="panel-heading">
                  <h3 className="panel-title">Products</h3>
            </div>
            <div className="panel-body">
                  <div  className="row">
                      {productList}
                  </div>
            </div>
        </div>   
      </div>
    );
  }
}
Products.propTypes = {
  actions: PropTypes.object,
  products: PropTypes.object,
  addToCart: PropTypes.func,
  
};



function mapStateToProps(state) {
  return {
      products: (state.products).toJS()
  };
}


function mapDispatchToProps(dispatch) {
  return {
      addToCart: item => dispatch(addToCart(item)),
      actions: bindActionCreators(ActionCreators, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
