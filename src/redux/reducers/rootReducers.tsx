import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import blogReducer from "./blogreducers";
import contactReducer from "./contactReducers";
import productReducer from "./productReducers";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
  blog: blogReducer,
  contact: contactReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
