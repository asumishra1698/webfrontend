import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
} from "../actions/actionsTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getRequest } from "../../config/apihelpers";
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

export function* watchProductSaga() {
    yield takeLatest(GET_PRODUCTS_REQUEST, getProductsSaga);
}
