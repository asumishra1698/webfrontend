import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
} from "./actionsTypes";

export const loginRequest = (payload: { mobile: string; password: string }) => ({
    type: LOGIN_REQUEST,
    payload,
});

export const loginSuccess = (user: any) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error: any) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const getUserProfileRequest = () => ({
    type: GET_USER_PROFILE_REQUEST,
});

export const getUserProfileSuccess = (data: any) => ({
    type: GET_USER_PROFILE_SUCCESS,
    payload: data,
});

export const getUserProfileFailure = (error: string) => ({
    type: GET_USER_PROFILE_FAILURE,
    payload: error,
});