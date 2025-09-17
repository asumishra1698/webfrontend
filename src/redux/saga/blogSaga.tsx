import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionsTypes";
import { getRequest } from "../../config/apihelpers";
import { API_URL } from "../../config/webRoutes";

function* getPostsSaga(action: any): Generator<any, void, any> {
  try {
    const { page, limit, search } = action.payload;
    const response = yield call(
      getRequest,
      `${API_URL}blog/posts?page=${page}&limit=${limit}&search=${search}&status=${action.payload.status}`
    );
    yield put({
      type: actionTypes.GET_POSTS_SUCCESS,
      payload: response,
    });   
  } catch (error: any) {
    yield put({
      type: actionTypes.GET_POSTS_FAILURE,
      payload: { error: error.message },
    });
  }
}

function* getPostBySlugSaga(action: any): Generator<any, void, any> {
  try {
    const { slug } = action.payload;
    const response = yield call(getRequest, `${API_URL}blog/posts/${slug}`);
    yield put({
      type: actionTypes.GET_POST_BY_SLUG_SUCCESS,
      payload: { post: response },
    });  
  } catch (error: any) {
    yield put({
      type: actionTypes.GET_POST_BY_SLUG_FAILURE,
      payload: { error: error.message },
    });
  }
}

export function* watchBlog() {
  yield takeLatest(actionTypes.GET_POSTS_REQUEST, getPostsSaga);
  yield takeLatest(actionTypes.GET_POST_BY_SLUG_REQUEST, getPostBySlugSaga);
}
