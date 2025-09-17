import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from "../actions/actionsTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getRequest, postRequest } from "../../config/apihelpers";
import { API_URL } from "../../config/webRoutes";

function* getProductsSaga(action: any): any {
  try {
    const { page = 1, limit = 10, search = "" } = action.payload || {};
    const url = `${API_URL}products?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`;
    const response = yield call(getRequest, url);
    const productsData = response.data ? response.data : response;
    yield put({ type: GET_PRODUCTS_SUCCESS, payload: productsData });
  } catch (error: any) {
    yield put({
      type: GET_PRODUCTS_FAILURE,
      payload: error?.message || "Failed to fetch products",
    });
  }
}

function* getProductByIdSaga(action: any): any {
  try {
    const { id } = action.payload || {};
    const url = `${API_URL}products/${id}`;
    const response = yield call(getRequest, url);
    const productData = response.data ? response.data : response;
    yield put({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: productData });
  } catch (error: any) {
    yield put({
      type: GET_PRODUCT_BY_ID_FAILURE,
      payload: error?.message || "Failed to fetch product",
    });
  }
}

export function* watchProductSaga() {
  yield takeLatest(GET_PRODUCTS_REQUEST, getProductsSaga);
  yield takeLatest(GET_PRODUCT_BY_ID_REQUEST, getProductByIdSaga);
}
