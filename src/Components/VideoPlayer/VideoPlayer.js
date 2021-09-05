import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { apis } from "../../constant";
import { Link } from "react-router-dom";
import { deleteVideo } from "../../apis/deleteVideoById";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Typography, Divider, Button } from "@material-ui/core";
import Comment from "./Comment";
import useStyles from "./styles";
import LikeDislike from "./LikeDislike";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function VideoPlayer(props) {
  const user = useSelector((state) => state.user);
  const role = user.user_info.roles;
  const { addToast } = useToasts();
  const history = useHistory();
  const classes = useStyles();
  let videoId = props.match.params.videoId;
  const [video, setVideo] = useState([]);
  const [CommentLists, setCommentLists] = useState([]);

  const videoVariable = {
    videoId: videoId,
  };

  useEffect(() => {
    axios.post(`${apis.getVideo}`, videoVariable).then((response) => {
      if (response.data.success) {
        const data = response.data.video;
        setVideo(data);
      } else {
        console.log("Failed to get video Info");
      }
    });

    axios.post(`${apis.getComment}`, videoVariable).then((res) => {
      if (res.data.success) {
        const data = res.data.comments;
        setCommentLists(data);
      } else {
        console.log("Failed to get video Info");
      }
    });
  }, []);

  const updateComment = (newComment) => {
    setCommentLists(CommentLists.concat(newComment));
  };

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

  return (
    <React.Fragment>
      <Container maxWidth="xl" className={classes.container}>
        <div>
          {role === "admin" ? (
            <div className={classes.buttonGrp}>
              <Link to={`/edit/${video.id}`} style={{ textDecoration: "none" }}>
                <Button
                  className={classes.editButton}
                  startIcon={<EditIcon />}
                  color="primary"
                  size="small"
                  variant="outlined"
                >
                  Edit
                </Button>
              </Link>

              <Button
                className={classes.deleteButton}
                onClick={() => onSubmit(video.id)}
                startIcon={<DeleteIcon />}
                color="secondary"
                variant="outlined"
                size="small"
              >
                Discard
              </Button>
            </div>
          ) : null}

          <ReactPlayer
            width="100%"
            height="35rem"
            playing={true}
            controls={true}
            url={`https://youtube.com/watch?${video.videoId}`}
          />
        </div>
        <div className={classes.videoDetails}>
          <Typography className={classes.titleStyle}>{video.title}</Typography>
          <LikeDislike videoId={videoId} />
        </div>
        <Typography className={classes.descripStyle}>
          {video.description}
        </Typography>
        <Divider variant="middle" className={classes.divider} />
        <Comment
          CommentLists={CommentLists}
          postId={video.id}
          refreshFunction={updateComment}
        />
      </Container>
    </React.Fragment>
  );
}
