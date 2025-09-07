import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionsTypes";
import { postRequest } from "../../config/apihelpers";
import { API_URL } from "../../config/webRoutes";
import Swal from "sweetalert2";

function* createContactSaga(action: any): Generator<any, void, any> {
  try {
    const { contactData } = action.payload;
    const response = yield call(
      postRequest,
      `${API_URL}contact/submit`,
      contactData
    );
    yield put({
      type: actionTypes.CREATE_CONTACT_SUCCESS,
      payload: response,
    });
    yield call(() =>
      Swal.fire({
        title: "Success!",
        text: "Successfully submitted! Thank you.",
        icon: "success",
        confirmButtonText: "OK",
      })
    );
  } catch (error: any) {
    yield put({
      type: actionTypes.CREATE_CONTACT_FAILURE,
      payload: { error: error.message },
    });
  }
}



export function* watchContact() {
  yield takeLatest(actionTypes.CREATE_CONTACT_REQUEST, createContactSaga);  
}
