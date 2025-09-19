import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAILURE,
    UPDATE_CART_QUANTITY_REQUEST,
    UPDATE_CART_QUANTITY_SUCCESS,
    UPDATE_CART_QUANTITY_FAILURE,
    REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS,
    REMOVE_CART_ITEM_FAILURE,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    GET_ORDER_BY_USERID_REQUEST,
    GET_ORDER_BY_USERID_SUCCESS,
    GET_ORDER_BY_USERID_FAILURE,
    GET_ORDER_DETAIL_REQUEST,
    GET_ORDER_DETAIL_SUCCESS,
    GET_ORDER_DETAIL_FAILURE
} from "../actions/actionsTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { getRequest, postRequest } from "../../config/apihelpers";
import { API_URL } from "../../config/webRoutes";
import { toast } from "react-toastify";


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
        toast.error(error?.message || "Failed to add to cart");
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

function* updateCartQuantitySaga(action: any): any {
    try {
        const { userId, productId, quantity } = action.payload || {};
        const url = `${API_URL}cart/update-quantity`;
        const response = yield call(postRequest, url, { productId, quantity });
        yield put({ type: UPDATE_CART_QUANTITY_SUCCESS, payload: { cart: response.cart } });
        yield put({ type: GET_CART_ITEMS_REQUEST, payload: { userId } });
    } catch (error: any) {
        yield put({
            type: UPDATE_CART_QUANTITY_FAILURE,
            payload: error?.message || "Failed to update cart quantity",
        });
        toast.error(error?.message || "Failed to update cart quantity");
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

function* getOrderDetailSaga(action: any): any {
    try {
        const { orderId } = action.payload || {};
        const url = `${API_URL}orders/${orderId}`;
        const response = yield call(getRequest, url);
        yield put({ type: GET_ORDER_DETAIL_SUCCESS, payload: { orderDetail: response.order } });
    } catch (error: any) {
        yield put({
            type: GET_ORDER_DETAIL_FAILURE,
            payload: error?.message || "Failed to fetch order details",
        });
    }
}

export function* watchCartSaga() {
    yield takeLatest(ADD_TO_CART_REQUEST, addToCartSaga);
    yield takeLatest(GET_CART_ITEMS_REQUEST, getCartItemsSaga);
    yield takeLatest(UPDATE_CART_QUANTITY_REQUEST, updateCartQuantitySaga);
    yield takeLatest(REMOVE_CART_ITEM_REQUEST, removeCartItemSaga);
    yield takeLatest(CHECKOUT_REQUEST, checkoutSaga);
    yield takeLatest(GET_ORDER_BY_USERID_REQUEST, getOrderByUserIdSaga);
    yield takeLatest(GET_ORDER_DETAIL_REQUEST, getOrderDetailSaga);
}
