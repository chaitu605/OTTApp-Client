import axios from "axios";
import { apis } from "../constant";

let data = null;

export const getAllVideos = async () => {
  await axios
    .post(`${apis.all}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getAllVideosTopRated = async () => {
  await axios
    .post(`${apis.fetchTopRated}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getAllVideosTvShows = async () => {
  await axios
    .post(`${apis.fetchTvShows}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getAllVideosAction = async () => {
  await axios
    .post(`${apis.fetchAction}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getAllVideosComedy = async () => {
  await axios
    .post(`${apis.fetchComedy}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getAllVideosHorror = async () => {
  await axios
    .post(`${apis.fetchHorror}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

export const getAllVideosRomance = async () => {
  await axios
    .post(`${apis.fetchRomance}`)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
