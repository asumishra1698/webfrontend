import { all } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
import { watchBlog } from "./blogSaga";

export default function* rootSaga() {
  yield all([watchAuth(), watchBlog()]);
}
