import { all } from "redux-saga/effects";
import { watchBlog } from "./blogSaga";
import { watchContact } from "./contactSaga";

export default function* rootSaga() {
  yield all([watchBlog(), watchContact()]);
}
