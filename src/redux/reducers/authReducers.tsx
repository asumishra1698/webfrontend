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
} from "../actions/actionsTypes";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  otpVerified: false,
  otpLoading: false,
  otpError: null,
  otpSuccess: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Request Email Login OTP
    case REQUEST_EMAIL_LOGIN_OTP_REQUEST:
      return {
        ...state,
        otpLoading: true,
        otpError: null,
        otpSuccess: null,
      };
    case REQUEST_EMAIL_LOGIN_OTP_SUCCESS:
      return {
        ...state,
        otpLoading: false,
        otpSuccess: action.payload,
        otpError: null,
      };
    case REQUEST_EMAIL_LOGIN_OTP_FAILURE:
      return {
        ...state,
        otpLoading: false,
        otpError: action.payload,
        otpSuccess: null,
      };

    // Verify Email Login OTP
    case VERIFY_EMAIL_LOGIN_OTP_REQUEST:
      return {
        ...state,
        otpLoading: true,
        otpError: null,
        otpVerified: false,
      };
    case VERIFY_EMAIL_LOGIN_OTP_SUCCESS:
      return {
        ...state,
        otpLoading: false,
        otpVerified: true,
        otpError: null,
      };
    case VERIFY_EMAIL_LOGIN_OTP_FAILURE:
      return {
        ...state,
        otpLoading: false,
        otpVerified: false,
        otpError: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;