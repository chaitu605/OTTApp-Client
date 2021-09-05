import React from "react";
import { useState, useEffect } from "react";
import { getAllVideos } from "../../apis/getAllVideos";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import "./banner.css";

export default function Banner() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllVideos();
      setVideos(data[Math.floor(Math.random() * data.length)]);
    };
    getData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <React.Fragment>
      <header
        className="banner"
        style={{
          backgroundImage: `url(
              ${videos?.thumbnail}
          )`,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">{videos?.title}</h1>
          <div className="banner_buttons">
            <Link to={`/videoplayer/${videos.id}`}>
              <button className="banner_button">Play</button>
            </Link>
            <Typography>Genre : {videos.genre}</Typography>
          </div>
          <h1 className="banner_description">
            {truncate(videos?.description, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </React.Fragment>
  );
}
