import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogreducers";
import contactReducer from "./contactReducers";

const rootReducer = combineReducers({
  blog: blogReducer,
  contact: contactReducer,
});

export default rootReducer;
