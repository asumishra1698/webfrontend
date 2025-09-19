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
} from "./actionsTypes";


export const addToCartRequest = (userId: string, productId: string, quantity: number) => ({
    type: ADD_TO_CART_REQUEST,
    payload: { userId, productId, quantity },
});
export const addToCartSuccess = (cart: any) => ({
    type: ADD_TO_CART_SUCCESS,
    payload: { cart },
});
export const addToCartFailure = (error: any) => ({
    type: ADD_TO_CART_FAILURE,
    payload: { error },
});

export const getCartItemsRequest = (userId: string) => ({
    type: GET_CART_ITEMS_REQUEST,
    payload: { userId },
});
export const getCartItemsSuccess = (cart: any) => ({
    type: GET_CART_ITEMS_SUCCESS,
    payload: { cart },
});
export const getCartItemsFailure = (error: any) => ({
    type: GET_CART_ITEMS_FAILURE,
    payload: { error },
});

export const removeCartItemRequest = (userId: string, productId: string) => ({
    type: REMOVE_CART_ITEM_REQUEST,
    payload: { userId, productId },
});
export const removeCartItemSuccess = (cart: any) => ({
    type: REMOVE_CART_ITEM_SUCCESS,
    payload: { cart },
});
export const removeCartItemFailure = (error: any) => ({
    type: REMOVE_CART_ITEM_FAILURE,
    payload: { error },
});

export const updateCartQuantityRequest = (userId: string, productId: string, quantity: number) => ({
    type: UPDATE_CART_QUANTITY_REQUEST,
    payload: { userId, productId, quantity },
});
export const updateCartQuantitySuccess = (cart: any) => ({
    type: UPDATE_CART_QUANTITY_SUCCESS,
    payload: { cart },
});
export const updateCartQuantityFailure = (error: any) => ({
    type: UPDATE_CART_QUANTITY_FAILURE,
    payload: { error },
});


export const checkoutRequest = (payload: any) => ({
    type: CHECKOUT_REQUEST,
    payload,
});
export const checkoutSuccess = (order: any) => ({
    type: CHECKOUT_SUCCESS,
    payload: { order },
});
export const checkoutFailure = (error: any) => ({
    type: CHECKOUT_FAILURE,
    payload: { error },
});

export const getOrderByUserIdRequest = (userId: string) => ({
    type: GET_ORDER_BY_USERID_REQUEST,
    payload: { userId },
});
export const getOrderByUserIdSuccess = (orders: any) => ({
    type: GET_ORDER_BY_USERID_SUCCESS,
    payload: { orders },
});
export const getOrderByUserIdFailure = (error: any) => ({
    type: GET_ORDER_BY_USERID_FAILURE,
    payload: { error },
});

export const getOrderDetailRequest = (orderId: string) => ({
    type: GET_ORDER_DETAIL_REQUEST,
    payload: { orderId },
});

export const getOrderDetailSuccess = (order: any) => ({
    type: GET_ORDER_DETAIL_SUCCESS,
    payload: { order },
});

export const getOrderDetailFailure = (error: any) => ({
    type: GET_ORDER_DETAIL_FAILURE,
    payload: { error },
});
