import React from "react";
import { useState, useEffect } from "react";
import useStyles from "./styles";
import { Tooltip, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import axios from "axios";
import { useSelector } from "react-redux";
import { apis } from "../../constant";

function LikeDislike(props) {
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);

  const variable = {
    videoId: props.videoId,
    userId: user.user_info.id,
  };

  useEffect(() => {
    axios.post(`${apis.getLikes}`, variable).then((response) => {
      if (response.data.success) {
        setLikes(response.data.likes.length);

        response.data.likes.map((like) => {
          if (like.userId === user.user_info.id) {
            setLikeAction("liked");
          }
        });
      } else {
        console.log("Failed to get likes");
      }
    });

    axios.post(`${apis.getDislikes}`, variable).then((response) => {
      if (response.data.success) {
        //How many likes does this video or comment have
        setDislikes(response.data.dislikes.length);

        //if I already click this like button or not
        response.data.dislikes.map((dislike) => {
          if (dislike.userId === user.user_info.id) {
            setDislikeAction("disliked");
          }
        });
      } else {
        console.log("Failed to get dislikes");
      }
    });
  }, []);

  const onLike = () => {
    if (LikeAction === null) {
      axios.post(`${apis.upLike}`, variable).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction("liked");

          //If dislike button is already clicked

          if (DislikeAction !== null) {
            setDislikeAction(null);
            setDislikes(Dislikes - 1);
          }
        } else {
          console.log("Failed to increase the like");
        }
      });
    } else {
      axios.post(`${apis.unLike}`, variable).then((response) => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLikeAction(null);
        } else {
          console.log("Failed to decrease the like");
        }
      });
    }
  };

  const onDislike = () => {
    if (DislikeAction !== null) {
      axios.post(`${apis.unDislike}`, variable).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
        } else {
          console.log("Failed to decrease dislike");
        }
      });
    } else {
      axios.post(`${apis.upDislike}`, variable).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction("disliked");

          //If dislike button is already clicked
          if (LikeAction !== null) {
            setLikeAction(null);
            setLikes(Likes - 1);
          }
        } else {
          console.log("Failed to increase dislike");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <span>
        <Tooltip title="I like this">
          <IconButton onClick={onLike} className={classes.likeicon}>
            {LikeAction ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
          </IconButton>
        </Tooltip>
        <span className={classes.likenumber}>{Likes}</span>
      </span>
      &nbsp;&nbsp;
      <span>
        <Tooltip title="I dislike this">
          <IconButton onClick={onDislike} className={classes.likeicon}>
            {DislikeAction ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
          </IconButton>
        </Tooltip>
        <span className={classes.dislikenumber}>{Dislikes}</span>
      </span>
    </React.Fragment>
  );
}

export default LikeDislike;
