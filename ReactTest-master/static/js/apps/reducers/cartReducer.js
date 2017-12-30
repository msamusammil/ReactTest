import initialState from './initialState';
import { ADD_CART, REMOVE_CART } from '../constants/cartActionTypes';
/**
 * Takes an empty array as initial state, then like the todo-example: either spreads
 * and adds a new item to the cart array, or removes the object with the specified ID
 */
export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case ADD_CART:
            //If 'ADD' from 'cartActions.js', spread the previous state, and
            //add the new item. This will result in a new array with an added item
            return [...state, action.item];
        case REMOVE_CART:
            //If 'REMOVE' from 'cartActions.js', return a new array without the
            //item with the ID we clicked on. filter returns a new array, don't
            //have to spread here
            return state.filter( i => i.id !== action.item.id);
        default:
            return state;
    }
}