import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import blogReducer from "./blogreducers";
import contactReducer from "./contactReducers";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  contact: contactReducer,
});

export default rootReducer;
