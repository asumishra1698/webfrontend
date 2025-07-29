import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionsTypes";
import {
  postRequest,
  getRequest,
  putRequest,
  deleteRequest,
} from "../../config/apihelpers";
import { BASE_URL } from "../../config";

function* getPostsSaga(action: any): Generator<any, void, any> {
  try {
    const { page, limit, search } = action.payload;
    const response = yield call(
      getRequest,
      `${BASE_URL}blog/posts?page=${page}&limit=${limit}&search=${search}`
    );
    console.log("Response:", response);
    yield put({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: response,
    });
    console.log("Pagination:", response.pagination);
  } catch (error: any) {
    yield put({
      type: actionTypes.GET_POSTS_FAILURE,
      payload: { error: error.message },
    });
  }
}

function* createPostSaga(action: any): Generator<any, void, any> {
  try {
    const { postData } = action.payload;
    const response = yield call(postRequest, `${BASE_URL}blog/posts`, postData);
    yield put({
      type: actionTypes.CREATE_POST_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: actionTypes.CREATE_POST_FAILURE,
      payload: { error: error.message },
    });
  }
}

function* updatePostSaga(action: any): Generator<any, void, any> {
  try {
    const { id, postData } = action.payload;
    const response = yield call(
      putRequest,
      `${BASE_URL}blog/posts/${id}`,
      postData
    );
    yield put({
      type: actionTypes.UPDATE_POST_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    yield put({
      type: actionTypes.UPDATE_POST_FAILURE,
      payload: { error: error.message },
    });
  }
}

function* deletePostSaga(action: any): Generator<any, void, any> {
  try {
    const { id } = action.payload;
    yield call(deleteRequest, `${BASE_URL}blog/posts/${id}`);
    yield put({ type: actionTypes.DELETE_POST_SUCCESS, payload: { id } });
  } catch (error: any) {
    yield put({
      type: actionTypes.DELETE_POST_FAILURE,
      payload: { error: error.message },
    });
  }
}

export function* watchBlog() {
  yield takeLatest(actionTypes.GET_POSTS_REQUEST, getPostsSaga);
  yield takeLatest(actionTypes.CREATE_POST_REQUEST, createPostSaga);
  yield takeLatest(actionTypes.UPDATE_POST_REQUEST, updatePostSaga);
  yield takeLatest(actionTypes.DELETE_POST_REQUEST, deletePostSaga);
}
