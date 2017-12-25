import { fork, call, takeEvery, all, put } from 'redux-saga/effects';
import axios from 'axios';
import { getProductsSuccess } from '../actions/productActions';
import { PRODUCT_LIST_REQUEST } from '../constants/productsActionType';

export function* getAllProducts() {
    const registrationApi = 'http://localhost:1337/items';
    try {
      const userresponse = yield call(axios.get, registrationApi);
      if(userresponse.status === 200){
        yield put(getProductsSuccess(userresponse.data.catalog));
      }
    } catch (e) {
        yield put(userSignupFailure(e.message));
      }
  }
export function* watchNavigate() {
    yield takeEvery(PRODUCT_LIST_REQUEST, getAllProducts)
  }
export default function* root() {
    yield all([
      fork(watchNavigate)
    ])
  }