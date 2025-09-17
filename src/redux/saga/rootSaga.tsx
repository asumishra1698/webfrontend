import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./authSaga";
import { watchBlog } from "./blogSaga";
import { watchContact } from "./contactSaga";
import { watchProductSaga } from "./productSaga";
import {watchCartSaga} from "./cartSaga";


export default function* rootSaga() {
  yield all([watchBlog(), watchContact(), watchProductSaga(), watchAuthSaga(), watchCartSaga()]);
}
