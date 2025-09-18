import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAILURE,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE,
    GET_ORDER_BY_USERID_REQUEST,
    GET_ORDER_BY_USERID_SUCCESS,
    GET_ORDER_BY_USERID_FAILURE
} from "../actions/actionsTypes";

const initialState = {
    loading: false,
    error: null,
    cart: [],
    orderSuccess: false,
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART_REQUEST:
        case GET_CART_ITEMS_REQUEST:
            return { ...state, loading: true, error: null };
        case ADD_TO_CART_SUCCESS:
        case GET_CART_ITEMS_SUCCESS:
            return {
                ...state,
                cart: action.payload.cart,
                loading: false,
                error: null,
            };
        case ADD_TO_CART_FAILURE:
        case GET_CART_ITEMS_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        case CHECKOUT_REQUEST:
            return { ...state, loading: true, error: null, orderSuccess: false };
        case CHECKOUT_SUCCESS:
            return { ...state, loading: false, error: null, cart: [], orderSuccess: true };
        case CHECKOUT_FAILURE:
            return { ...state, loading: false, error: action.payload.error, orderSuccess: false };
        case GET_ORDER_BY_USERID_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ORDER_BY_USERID_SUCCESS:
            return { ...state, loading: false, error: null, orders: action.payload.orders };
        case GET_ORDER_BY_USERID_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export default cartReducer;