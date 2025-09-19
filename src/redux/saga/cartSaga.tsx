import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    GET_ORDER_BY_USERID_REQUEST,
    GET_ORDER_BY_USERID_SUCCESS,
    GET_ORDER_BY_USERID_FAILURE
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

function* removeCartItemSaga(action: any): any {
    try {
        const { userId, productId } = action.payload || {};
        const url = `${API_URL}cart/remove`;
        const response = yield call(postRequest, url, { userId, productId });
        const cartData = response.data ? response.data : response;
        yield put({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartData });
        yield put({ type: GET_CART_ITEMS_REQUEST, payload: { userId } });
    } catch (error: any) {
        yield put({
            type: REMOVE_CART_ITEM_FAILURE,
            payload: error?.message || "Failed to remove from cart",
        });
    }
}

function* checkoutSaga(action: any): any {
    try {
        const payload = action.payload;
        const url = `${API_URL}orders/checkout`;
        const response = yield call(postRequest, url, payload);
        console.log(response);
        yield put({ type: CHECKOUT_SUCCESS, payload: { order: response.order } });
    } catch (error: any) {
        yield put({
            type: CHECKOUT_FAILURE,
            payload: error?.message || "Failed to checkout",
        });
    }
}

function* getOrderByUserIdSaga(action: any): any {
    try {
        const { userId } = action.payload || {};
        const url = `${API_URL}orders?userId=${userId}`;
        const response = yield call(getRequest, url);
        yield put({ type: GET_ORDER_BY_USERID_SUCCESS, payload: { orders: response.orders } });
    } catch (error: any) {
        yield put({
            type: GET_ORDER_BY_USERID_FAILURE,
            payload: error?.message || "Failed to fetch orders",
        });
    }
}

export function* watchCartSaga() {
    yield takeLatest(ADD_TO_CART_REQUEST, addToCartSaga);
    yield takeLatest(GET_CART_ITEMS_REQUEST, getCartItemsSaga);
    yield takeLatest(REMOVE_CART_ITEM_REQUEST, removeCartItemSaga);
    yield takeLatest(CHECKOUT_REQUEST, checkoutSaga);
    yield takeLatest(GET_ORDER_BY_USERID_REQUEST, getOrderByUserIdSaga);
}
