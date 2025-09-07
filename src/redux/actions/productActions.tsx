import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "./actionsTypes";

export const getProductsRequest = (page = 1, limit = 10, search = "") => ({
  type: GET_PRODUCTS_REQUEST,
  payload: { page, limit, search },
});
export const getProductsSuccess = (data: any, pagination: any) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: { data, pagination },
});
export const getProductsFailure = (error: any) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: { error },
});
