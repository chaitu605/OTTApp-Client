import axios from "axios";
import { apis } from "../constant";

import { ADD_VIDEO, LOADING } from "./types";

export const add_video = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post(`${apis.upload}`, data)
    .then((res) => {
      if (res.data.success) {
        dispatch({
          type: ADD_VIDEO,
          video: res.data.video,
          message: "",
        });
      } else {
        dispatch({
          type: ADD_VIDEO,
          video: null,
          message: res.data.message,
        });
      }
    })
    .catch((err) => {
      console.log("adding video failed", err);
    });
};
