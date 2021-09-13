import { handleLogoutApi } from "../http/api";
import $api from "../http/Axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from "./actionTypes";

export const registrate = (user) => async (dispatch) => {
  $api
    .post("/auth/registrate", user)
    .then((res) => {
      console.log(res);
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: res.data.user,
      });
    })
    .catch((err) => {
      dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: {
          message: err.response.data.message,
          errorStatus: err.response.status,
          errors: err.response.data.errors,
        },
      });
    });
};

export const login = (user) => async (dispatch) => {
  $api
    .post("/auth/login", user)
    .then((res) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data.user,
      });
      localStorage.setItem("token", res.data.accessToken);
    })
    .catch((err) => {
      if (err.response) {
        dispatch({
          type: USER_LOGIN_FAILURE,
          payload: {
            message: err.response.data.message,
            errorStatus: err.response.status,
            errors: err.response.data.errors,
          },
        });
      }
    });
};

export const autoLogin = () => async (dispatch) => {
  $api
    .post("/auth/auto")
    .then((res) => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        dispatch({
          type: USER_LOGIN_FAILURE,
          payload: {
            message: err.response.data.message,
            errorStatus: err.response.status,
            errors: err.response.data.errors,
          },
        });
      }
    });
};

export const logout = () => async (dispatch) => {
  await handleLogoutApi();

  dispatch({
    type: USER_LOGOUT_SUCCESS,
  });
  localStorage.removeItem("token");
};
