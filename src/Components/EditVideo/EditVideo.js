import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import useStyles from "./styles";
import { apis } from "../../constant";

const Genres = [
  "Action",
  "Comedy",
  "Horror",
  "Romance",
  "Top Rated",
  "Drama,Action",
];

export default function EditVideo() {
  const classes = useStyles();
  const history = useHistory();
  const { addToast } = useToasts();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const getVideoById = async () => {
      await axios
        .get(`${apis.findById}${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setGenre(res.data.genre);
          setThumbnail(res.data.thumbnail);
          setVideoId(res.data.videoId);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getVideoById();
  }, [id]);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "description") {
      setDescription(value);
    }
    if (name === "genre") {
      setGenre(value);
    }
    if (name === "videoId") {
      setVideoId(value);
    }
    /* if (name === "thumbnail") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setThumbnail(reader.result);
        console.log("reader_result=", reader.result);
      };
    }*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateVideo = async () => {
      await axios
        .put(`${apis.updateById}${id}`, {
          title,
          description,
          genre,
          //  thumbnail,
          videoId,
        })
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    };
    updateVideo();
    setTimeout(() => {
      addToast("Video Edited Successfully!", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/dashboard");
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
                  Edit Video
                </Typography>
              </Grid>
              <form onSubmit={handleSubmit}>
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
                    fullWidth
                    required
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
                    fullWidth
                    required
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

                  {/*
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
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  */}

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
                    startIcon={<SaveIcon />}
                    fullWidth
                  >
                    Save
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
