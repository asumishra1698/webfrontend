import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionsTypes";
import { getRequest, postRequest } from "../../config/apihelpers";
import { BASE_URL } from "../../config";

function* createContactSaga(action: any): Generator<any, void, any> {
  try {
    const { contactData } = action.payload;
    const response = yield call(
      postRequest,
      `${BASE_URL}contact/submit`,
      contactData
    );
    yield put({
      type: actionTypes.CREATE_CONTACT_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: actionTypes.CREATE_CONTACT_FAILURE,
      payload: { error: error.message },
    });
  }
}

function* getContactsSaga(action: any): Generator<any, void, any> {
  try {
    const { page, limit, search } = action.payload;
    const response = yield call(
      getRequest,
      `${BASE_URL}contact/all?page=${page}&limit=${limit}&search=${search}`
    );
    yield put({
      type: actionTypes.GET_CONTACTS_SUCCESS,
      payload: response,
    });
  } catch (error: any) {
    yield put({
      type: actionTypes.GET_CONTACTS_FAILURE,
      payload: { error: error.message },
    });
  }
}

export function* watchContact() {
  yield takeLatest(actionTypes.CREATE_CONTACT_REQUEST, createContactSaga);
  yield takeLatest(actionTypes.GET_CONTACTS_REQUEST, getContactsSaga);
}
