import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAILURE,
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