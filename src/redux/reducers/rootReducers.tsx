import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import blogReducer from "./blogreducers";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export default rootReducer;
