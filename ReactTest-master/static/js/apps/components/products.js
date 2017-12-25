import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cartActions';
import * as ActionCreators from '../actions/productActions';

class Products extends Component {

  constructor(props){
    super(props);
    
    this.props.actions.getProducts();
  }
  render() {

    const { actions } = this.props;

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
         {productList}
      </div>
    );
  }
}
Products.propTypes = {
  actions: React.PropTypes.object,
  products: React.PropTypes.object,
};



function mapStateToProps(state, props) {
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
