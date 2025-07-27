import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REQUEST_EMAIL_LOGIN_OTP_REQUEST,
  REQUEST_EMAIL_LOGIN_OTP_SUCCESS,
  REQUEST_EMAIL_LOGIN_OTP_FAILURE,
  VERIFY_EMAIL_LOGIN_OTP_REQUEST,
  VERIFY_EMAIL_LOGIN_OTP_SUCCESS,
  VERIFY_EMAIL_LOGIN_OTP_FAILURE,
} from "../actions/actionsTypes";
import { postRequest } from "../../config/apihelpers";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";

function* loginSaga(action: any): any {
  try {
    const response = yield call(
      postRequest,
      `${BASE_URL}auth/login`,
      action.payload
    );
    localStorage.setItem("token", response.user.token);
    localStorage.setItem("user", JSON.stringify(response.user));

    yield put({ type: LOGIN_SUCCESS, payload: response });
    toast.success(response.message || "Login successful");
    if (action.payload.navigate) {
      action.payload.navigate("/dashboard");
    }
  } catch (error: any) {
    yield put({
      type: LOGIN_FAILURE,
      payload: error?.message || "Login failed",
    });
    toast.error(error?.message || "Login failed");
  }
}

function* requestEmailLoginOtpSaga(action: any): any {
  try {
    const response = yield call(
      postRequest,
      `${BASE_URL}auth/login/request-email-otp`,
      action.payload
    );
    yield put({ type: REQUEST_EMAIL_LOGIN_OTP_SUCCESS, payload: response });
    toast.success(response.message || "OTP sent to your email");
  } catch (error: any) {
    yield put({
      type: REQUEST_EMAIL_LOGIN_OTP_FAILURE,
      payload: error?.message || "Failed to send OTP",
    });
    toast.error(error?.message || "Failed to send OTP");
  }
}

function* verifyEmailLoginOtpSaga(action: any): any {
  try {
    const response = yield call(
      postRequest,
      `${BASE_URL}auth/login/verify-email-otp`,
      action.payload
    );

    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    yield put({ type: VERIFY_EMAIL_LOGIN_OTP_SUCCESS, payload: response });
    toast.success(response.message || "OTP verified successfully");
  } catch (error: any) {
    yield put({
      type: VERIFY_EMAIL_LOGIN_OTP_FAILURE,
      payload: error?.message || "OTP verification failed",
    });
    toast.error(error?.message || "OTP verification failed");
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REQUEST_EMAIL_LOGIN_OTP_REQUEST, requestEmailLoginOtpSaga);
  yield takeLatest(VERIFY_EMAIL_LOGIN_OTP_REQUEST, verifyEmailLoginOtpSaga);
}
