import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
} from "../actions/actionsTypes";

const initialState = {
    loading: false,
    user: null,
    error: null,
    token: localStorage.getItem("token") || null,
};

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user || action.payload,
                token: action.payload.token,
                error: null,
            };
        case LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload };

        // Get User Profile
        case GET_USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null,
            };
        case GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;