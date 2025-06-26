import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REQUEST_EMAIL_LOGIN_OTP_REQUEST,
  REQUEST_EMAIL_LOGIN_OTP_SUCCESS,
  REQUEST_EMAIL_LOGIN_OTP_FAILURE,
  VERIFY_EMAIL_LOGIN_OTP_REQUEST,
  VERIFY_EMAIL_LOGIN_OTP_SUCCESS,
  VERIFY_EMAIL_LOGIN_OTP_FAILURE,
} from "./actionsTypes";


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


export const requestEmailLoginOtpRequest = (payload: { email: string }) => ({
  type: REQUEST_EMAIL_LOGIN_OTP_REQUEST,
  payload,
});

export const requestEmailLoginOtpSuccess = (data: any) => ({
  type: REQUEST_EMAIL_LOGIN_OTP_SUCCESS,
  payload: data,
});

export const requestEmailLoginOtpFailure = (error: string) => ({
  type: REQUEST_EMAIL_LOGIN_OTP_FAILURE,
  payload: error,
});

export const verifyEmailLoginOtpRequest = (payload: { email: string; otp: string }) => ({
  type: VERIFY_EMAIL_LOGIN_OTP_REQUEST,
  payload,
});

export const verifyEmailLoginOtpSuccess = (data: any) => ({
  type: VERIFY_EMAIL_LOGIN_OTP_SUCCESS,
  payload: data,
});

export const verifyEmailLoginOtpFailure = (error: string) => ({
  type: VERIFY_EMAIL_LOGIN_OTP_FAILURE,
  payload: error,
});