import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { getAllVideosAction } from "../../apis/getAllVideos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Paper, IconButton, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteVideo } from "../../apis/deleteVideoById";
import { useToasts } from "react-toast-notifications";
import useStyles from "./styles";
import Loader from "../Loader/Loader";

export default function ARow3() {
  const classes = useStyles();
  const history = useHistory();
  const { addToast } = useToasts();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllVideosAction();
      setVideos(data);
    };

    getData();
  }, []);

  const onSubmit = async (id) => {
    try {
      const data = await deleteVideo(id);

      if (data.status === 200) {
        addToast("Deleted Successfully", {
          appearance: "success",
          autoDismiss: true,
        });

        history.push({
          pathname: "/dashboard",
        });
      }
    } catch (e) {
      console.log(e);
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

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
      <Container maxWidth="xl" className={classes.row}>
        <h2>Action</h2>
        {videos !== null && videos.length ? (
          <Carousel responsive={responsive} swipeable={true}>
            {videos.map((item) => (
              <div key={item.id}>
                <div className={classes.buttonGrp}>
                  <Link
                    to={`/edit/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Tooltip title="Edit" placement="right" arrow>
                      <IconButton
                        className={classes.editButton}
                        color="primary"
                        size="small"
                        variant="outlined"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  </Link>

                  <Tooltip title="Delete" placement="left" arrow>
                    <IconButton
                      className={classes.deleteButton}
                      id={item.id}
                      onClick={() => onSubmit(item.id)}
                      color="secondary"
                      variant="outlined"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </div>
                <Paper className={classes.paper} elevation={0} key={item.id}>
                  <img
                    onClick={() => handleClick(item.id)}
                    className={classes.img}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className={classes.title}>{item.title}</div>
                </Paper>
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
