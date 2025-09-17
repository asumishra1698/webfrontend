import { call, put, takeLatest } from "redux-saga/effects";
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_PROFILE_REQUEST,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
} from "../actions/actionsTypes";
import { getRequest, postRequest } from "../../config/apihelpers";
import { API_URL, API_ENDPOINTS } from "../../config/webRoutes";

function* loginSaga(action: any): any {
    try {
        const response = yield call(postRequest, `${API_URL}auth/login`, {
            mobile: action.payload.mobile,
            password: action.payload.password,
            role: "customer",
        });
        yield put({ type: LOGIN_SUCCESS, payload: response });
        localStorage.setItem("token", response.user.token);
        localStorage.setItem("id", response.user.id);
    } catch (error: any) {
        yield put({
            type: LOGIN_FAILURE,
            payload: error.message || "Login failed",
        });
    }
}

function* getUserProfileSaga(action: any): any {
    try {
        const response = yield call(
            getRequest,
            `${API_URL}${API_ENDPOINTS.GET_USER_PROFILE}`,
            action.payload
        );
        yield put({ type: GET_USER_PROFILE_SUCCESS, payload: response.user });
    } catch (error: any) {
        yield put({
            type: GET_USER_PROFILE_FAILURE,
            payload: error?.message || "Failed to fetch user profile",
        });
    }
}

export function* watchAuthSaga() {
    yield takeLatest(LOGIN_REQUEST, loginSaga);
    yield takeLatest(GET_USER_PROFILE_REQUEST, getUserProfileSaga);
}