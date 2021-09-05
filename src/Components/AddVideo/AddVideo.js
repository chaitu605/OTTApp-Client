import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { add_video } from "../../actions/videos.action";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

const Genres = [
  "Action",
  "Comedy",
  "Horror",
  "Romance",
  "Top Rated",
  "Drama,Action",
];

function AddVideo(props) {
  const history = useHistory();
  const classes = useStyles();
  const { addToast } = useToasts();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [videoId, setVideoId] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const { handleSubmit } = useForm();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    }

    if (name === "genre") {
      setGenre(value);
    }

    if (name === "description") {
      setDescription(value);
    }
    if (name === "videoId") {
      setVideoId(value);
    }

    if (name === "thumbnail") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
    }
  };

  const submitData = () => {
    props.add_video({
      title,
      description,
      genre,
      thumbnail,
      videoId,
    });
    setTitle("");
    setDescription("");
    setGenre("");
    setThumbnail("");
    setVideoId("");
    setTimeout(() => {
      addToast("Video Uploaded Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/admin-dashboard");
    }, 1000);
  };

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <Grid container align="center" justifyContent="center">
          <Paper className={classes.paperStyle} elevation={20}>
            <Grid>
              <Grid align="center">
                <Typography className={classes.headerStyle}>
                  Upload Video
                </Typography>
              </Grid>
              <form onSubmit={handleSubmit(submitData)}>
                <div>
                  <TextField
                    className={classes.textField}
                    onChangeCapture={handleInputChange}
                    color="primary"
                    name="title"
                    value={title}
                    id="outlined-basic"
                    label="Title"
                    placeholder="Enter Title"
                    variant="outlined"
                    required
                    fullWidth
                  />

                  <TextField
                    className={classes.textField}
                    onChangeCapture={handleInputChange}
                    color="primary"
                    name="description"
                    value={description}
                    id="outlined-multiline-static"
                    label="Description"
                    placeholder="Enter description"
                    multiline
                    rows={2}
                    variant="outlined"
                    required
                    fullWidth
                  />

                  <FormControl
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    required
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Genre
                    </InputLabel>
                    <Select
                      name="genre"
                      onChange={handleInputChange}
                      value={genre}
                      color="primary"
                      labelId="genretype"
                      id="genre"
                      label="Select Genre"
                      displayEmpty
                    >
                      {Genres.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    className={classes.textField}
                    onChangeCapture={handleInputChange}
                    color="primary"
                    name="thumbnail"
                    id="outlined-basic"
                    label="Upload Thumbnail"
                    type="file"
                    placeholder="Placeholder"
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    className={classes.textField}
                    onChangeCapture={handleInputChange}
                    color="primary"
                    name="videoId"
                    value={videoId}
                    id="outlined-basic"
                    label="VideoId"
                    placeholder="Enter VideoId"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </div>
                <div className={classes.buttonStyle}>
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    fullWidth
                    startIcon={<PublishRoundedIcon />}
                  >
                    Upload
                  </Button>
                </div>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </div>
  );
}
const MapStatetoProps = (state) => ({
  videos: state.videos,
});
export default connect(MapStatetoProps, { add_video })(AddVideo);
