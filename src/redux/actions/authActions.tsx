import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionsTypes";

// payload: { identifier, password }
export const loginRequest = (payload: {
  email: string;
  mobile: string;
  password: string;
  role: string;
}) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
