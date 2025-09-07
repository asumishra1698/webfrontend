import { all } from "redux-saga/effects";
import { watchBlog } from "./blogSaga";
import { watchContact } from "./contactSaga";
import { watchProductSaga } from "./productSaga";


export default function* rootSaga() {
  yield all([watchBlog(), watchContact(), watchProductSaga()]);
}
