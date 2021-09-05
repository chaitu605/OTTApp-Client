import { LOGIN_USER, GOOGLE_LOGIN, FACEBOOK_LOGIN } from "./types";

export const setUserData = (dispatch, data) => {
  dispatch({
    type: LOGIN_USER,
    payload: data.data,
  });
};

export const setGoogleLogin = (dispatch, data) => {
  dispatch({
    type: GOOGLE_LOGIN,
    payload: data.data,
  });
};
export const setFacebookLogin = (dispatch, data) => {
  dispatch({
    type: FACEBOOK_LOGIN,
    payload: data.data,
  });
};
