import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogreducers";
import contactReducer from "./contactReducers";
import productReducer from "./productReducers";


const rootReducer = combineReducers({
  blog: blogReducer,
  contact: contactReducer,
  product: productReducer,
});

export default rootReducer;
