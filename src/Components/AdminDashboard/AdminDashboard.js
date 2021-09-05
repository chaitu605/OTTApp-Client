import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAllVideos } from "../../apis/getAllVideos";
import { useToasts } from "react-toast-notifications";
import { deleteVideo } from "../../apis/deleteVideoById";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  TextField,
  IconButton,
  Container,
  Paper,
  Tooltip,
} from "@material-ui/core";
import useStyles from "./styles";
import ARow1 from "./ARow1";
import ARow2 from "./ARow2";
import ARow3 from "./ARow3";
import ARow4 from "./ARow4";
import ARow5 from "./ARow5";
import ARow6 from "./ARow6";

export default function AdminDashboard() {
  const { handleSubmit } = useForm();
  const classes = useStyles();
  const history = useHistory();
  const { addToast } = useToasts();
  const [FilteredData, setFilteredData] = useState([]);
  const [Data, setData] = useState(true);
  const [SearchTerm, setSearchTerm] = useState("");
  const [Video, setVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const newData = await getAllVideos();
      setVideo(newData);
    };

    getData();
  }, []);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "search") {
      setSearchTerm(value);
    }
  };

  const submitData = (e) => {
    const newFilter = Video.filter((value) => {
      return value.title.toLowerCase().includes(SearchTerm.toLowerCase());
    });

    setFilteredData(newFilter);

    if (newFilter.length === 0) {
      setData(false);
    } else {
      setData(true);
    }
  };

  const handleClick = (id) => {
    history.push(`/videoplayer/${id}`);
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
          pathname: "/admin-dashboard",
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
      <Container maxWidth="xl" className={classes.Container}>
        <form onSubmit={handleSubmit(submitData)}>
          <div className={classes.searchContainer}>
            <TextField
              className={classes.test}
              onChange={handleInputChange}
              InputLabelProps={{
                className: classes.inputLabel,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="inherit" edge="end" type="submit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                className: classes.searchInput,
              }}
              color="secondary"
              name="search"
              label="Search..."
              value={SearchTerm}
              variant="filled"
              id="search_box"
              fullWidth
            />
          </div>
        </form>

        <Container maxWidth="xl" className={classes.row}>
          <Carousel responsive={responsive} swipeable={true}>
            {FilteredData.length !== 0 &&
              FilteredData.map((item) => (
                <div className={classes.AdminSearch} key={item.id}>
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
                  <Paper className={classes.paper} elevation={0}>
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
          {Data === false ? (
            <div className={classes.matchFail}>
              <h2>Couldn't match any Search Results</h2>
            </div>
          ) : (
            <div className={classes.matchFail2}></div>
          )}
        </Container>

        <ARow1 />
        <ARow2 />
        <ARow3 />
        <ARow4 />
        <ARow5 />
        <ARow6 />
      </Container>
    </React.Fragment>
  );
}
