import axios from "axios";
import { apis } from "../constant";

let data = null;
export const loginUser = async (username, password) => {
  await axios
    .post(`${apis.login}`, { username, password })
    .then((res) => {
      data = res;
      sessionStorage.setItem("user_data", JSON.stringify(res.data));
      sessionStorage.setItem("username", res.data.username);
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
