import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
    localStorage.setItem("token", response.token);
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

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
