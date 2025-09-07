import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
} from "../actions/actionsTypes";

const initialState = {
    loading: false,
    error: null,
    products: [],
    pagination: null,
};

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                pagination: {
                    total: action.payload.total,
                    page: action.payload.page,
                    pages: action.payload.pages,
                    limit: action.payload.limit,
                },
            };
        case GET_PRODUCTS_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        default:
            return state;
    }
};

export default productReducer;
