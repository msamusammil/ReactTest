
/**
 * We don't have to use the variable 'payload', we can also just name it: 'item'
 * @param {Object} item 
 */
import {ADD_CART, REMOVE_CART } from '../constants/cartActionTypes';

export function addToCart(item) {
    return {
        type: 'ADD_CART',
        item: item
    };
  }
  
  export function removeFromCart(item) {
    return {
        type: 'REMOVE_CART',
        item: item
    };
  }