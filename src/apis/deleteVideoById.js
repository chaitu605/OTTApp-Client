import axios from "axios";
import { apis } from "../constant";

let data = null;

export const deleteVideo = async (id) => {
  console.log(id);
  await axios
    .delete(`${apis.deleteById}${id}`)
    .then((res) => {
      data = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};
