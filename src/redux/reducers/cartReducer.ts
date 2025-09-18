import {
    ADD_TO_CART_REQUEST,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAILURE,
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILURE
} from "../actions/actionsTypes";

const initialState = {
    loading: false,
    error: null,
    cart: [],
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
            return { ...state, loading: true, error: null };
        case CHECKOUT_SUCCESS:
            return { ...state, loading: false, error: null, cart: [] };
        case CHECKOUT_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export default cartReducer;