import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllVideosTopRated } from "../../apis/getAllVideos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "@material-ui/core";
import "./row.css";
import Loader from "../Loader/Loader";

export default function Row1() {
  const history = useHistory();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllVideosTopRated();
      setVideos(data);
    };

    getData();
  }, []);

  const handleClick = (id) => {
    history.push(`/videoplayer/${id}`);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 330 },
      items: 1,
    },
    mobileSmall: {
      breakpoint: { max: 320, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <React.Fragment>
      <Container maxWidth="xl" className="row">
        <h2>Top-Rated</h2>
        {videos !== null && videos.length ? (
          <Carousel responsive={responsive} swipeable={true}>
            {videos.map((item) => (
              <div className="row_thumbnails" key={item.id}>
                <img
                  onClick={() => handleClick(item.id)}
                  className="row_thumbnail"
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <Loader />
        )}
      </Container>
    </React.Fragment>
  );
}
