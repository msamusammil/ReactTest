import { fromJS } from 'immutable';
// import initialState from './initialState';

/**
 * This is so we could extend the product array of the state,
 * this reducer takes the products array from 'initialState.js'
 * and returns it, nothing more. Not listening to any actions
 * at the moment. This will populate the state
 */
import { DEFAULT_ACTION, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productsActionType';

const initialState = fromJS({
    products: null,
    error: false,
    userpayload: null,
    payload: null
  });

function products(state = initialState, action){
    
    switch (action.type) {
        case DEFAULT_ACTION:
          return state;
        case PRODUCT_LIST_REQUEST:
          return state.merge({
            userpayload: action.params, showErrorMessage: null
          });
          // return state;
        case PRODUCT_LIST_SUCCESS:
          return state.merge({
            products: action.userResponse,
          });
          // return state;
        default:
          return state;
      }
}
export default products;