import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAILURE,
} from "../actions/actionsTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getRequest, postRequest } from "../../config/apihelpers";
import { API_URL } from "../../config/webRoutes";


function* addToCartSaga(action: any): any {
    try {
        const { userId, productId, quantity } = action.payload || {};
        const url = `${API_URL}cart/add`;
        const response = yield call(postRequest, url, { userId, productId, quantity });
        const cartData = response.data ? response.data : response;
        yield put({ type: ADD_TO_CART_SUCCESS, payload: cartData });
        yield put({ type: GET_CART_ITEMS_REQUEST, payload: { userId } });
    } catch (error: any) {
        yield put({
            type: ADD_TO_CART_FAILURE,
            payload: error?.message || "Failed to add to cart",
        });
    }
}

function* getCartItemsSaga(action: any): any {
    try {
        const { userId } = action.payload || {};
        const url = `${API_URL}cart?userId=${userId}`;
        const response = yield call(getRequest, url);
        yield put({ type: GET_CART_ITEMS_SUCCESS, payload: { cart: response.cart } });        
    } catch (error: any) {
        yield put({
            type: GET_CART_ITEMS_FAILURE,
            payload: error?.message || "Failed to fetch cart items",
        });
    }
}

export function* watchCartSaga() {
    yield takeLatest(ADD_TO_CART_REQUEST, addToCartSaga);
    yield takeLatest(GET_CART_ITEMS_REQUEST, getCartItemsSaga);
}
