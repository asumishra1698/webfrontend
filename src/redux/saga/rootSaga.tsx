import { all } from "redux-saga/effects";
import { watchAuth } from "./authSaga";
import { watchBlog } from "./blogSaga";
import { watchContact } from "./contactSaga";

export default function* rootSaga() {
  yield all([watchAuth(), watchBlog(), watchContact()]);
}
