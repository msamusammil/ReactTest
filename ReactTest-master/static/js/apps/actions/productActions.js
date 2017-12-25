import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productsActionType';

export function getProducts(params) {
    return {
        type: 'PRODUCT_LIST_REQUEST',
        params
    };
  }
  export function getProductsSuccess(userResponse) {
    return {
        type: 'PRODUCT_LIST_SUCCESS',
        userResponse
    };
  }