import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,

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

export const getProductByIdRequest = (id: string) => ({
  type: GET_PRODUCT_BY_ID_REQUEST,
  payload: { id },
});
export const getProductByIdSuccess = (data: any) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  payload: { data },
});
export const getProductByIdFailure = (error: any) => ({
  type: GET_PRODUCT_BY_ID_FAILURE,
  payload: { error },
});

