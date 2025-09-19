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
    GET_ORDER_DETAIL_FAILURE,
} from "../actions/actionsTypes";

const initialState = {
    loading: false,
    error: null,
    cart: [],
    orders: [],
    orderDetail: null,
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
            return { ...state, loading: false, error: null, cart: [], orderSuccess: action.payload.order, };
        case CHECKOUT_FAILURE:
            return { ...state, loading: false, error: action.payload.error, orderSuccess: false };

        case GET_ORDER_BY_USERID_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ORDER_BY_USERID_SUCCESS:
            return { ...state, loading: false, error: null, orders: action.payload.orders };
        case GET_ORDER_BY_USERID_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case REMOVE_CART_ITEM_REQUEST:
            return { ...state, loading: true, error: null };
        case REMOVE_CART_ITEM_SUCCESS:
            return { ...state, loading: false, error: null, cart: action.payload.cart };
        case REMOVE_CART_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case UPDATE_CART_QUANTITY_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_CART_QUANTITY_SUCCESS:
            return { ...state, loading: false, error: null, cart: action.payload.cart };
        case UPDATE_CART_QUANTITY_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case GET_ORDER_DETAIL_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ORDER_DETAIL_SUCCESS:
            return { ...state, loading: false, error: null, orderDetail: action.payload.orderDetail };
        case GET_ORDER_DETAIL_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export default cartReducer;