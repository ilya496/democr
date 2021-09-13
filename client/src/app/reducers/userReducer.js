import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_SUCCESS,
} from "../actions/actionTypes";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loginFailure: {
          errors: action.payload.errors,
          errorMessage: action.payload.message,
          errorStatus: action.payload.errorStatus,
        },
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case USER_SIGNUP_FAILURE:
      return {
        ...state,
        signupFailure: {
          errors: action.payload.errors,
          errorMessage: action.payload.message,
          errorStatus: action.payload.errorStatus,
        },
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};
