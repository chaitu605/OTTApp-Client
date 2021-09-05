import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { apis } from "../../constant";
import {
  Button,
  TextField,
  Typography,
  Avatar,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles";

export default function Comment(props) {
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const [comment, setComment] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "comment") {
      setComment(value);
    }
  };

  const onSubmit = (e) => {
    const variables = {
      comment: comment,
      writer: user.user_info.id,
      postId: props.postId,
    };

    const getData = async () => {
      await axios
        .post(`${apis.saveComment}`, variables)
        .then((res) => {
          setComment("");
          props.refreshFunction(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography className={classes.comment}>
          {props.CommentLists.length} Comments
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.textfield}>
            <Avatar className={classes.avatar}></Avatar>
            <TextField
              InputProps={{
                className: classes.input,
              }}
              onChangeCapture={handleChange}
              id="standard-basic"
              placeholder=" Add a comment"
              value={comment}
              fullWidth
              {...register("comment", { required: "Please add a comment" })}
              error={Boolean(errors.comment)}
              helperText={errors.comment?.message}
            />
            <Button className={classes.cmtButton} type="submit">
              <Typography>Post</Typography>
            </Button>
          </div>
        </form>
        <div>
          {props.CommentLists &&
            props.CommentLists.map((comment, index) => (
              <Paper className={classes.paper} elevation={0}>
                <Avatar className={classes.avatar}></Avatar>
                <div key={index} className={classes.posted}>
                  <Typography>{comment.writer.username}:</Typography>
                  <Typography>{comment.comment}</Typography>
                </div>
              </Paper>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}
