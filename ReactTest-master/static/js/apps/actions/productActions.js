import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE } from '../constants/productsActionType';

export function getProducts(params) {
    return {
        type: PRODUCT_LIST_REQUEST,
        params
    };
  }
export function getProductsSuccess(userResponse) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        userResponse
    };
  }
export function getProductsFailure(errorResponse) {
    return {
        type: PRODUCT_LIST_FAILURE,
        errorResponse
    }
}