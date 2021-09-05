import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllVideos } from "../../apis/getAllVideos";
import { useForm } from "react-hook-form";
import { TextField, IconButton, Container, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import useStyles from "./styles";

export default function SearchResults() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
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
    console.log(Data);
  };

  const handleClick = (id) => {
    history.push(`/videoplayer/${id}`);
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg" className={classes.Container}>
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

        <div>
          <div className={classes.header}>
            <h2>Search results</h2>
          </div>

          <Container maxWidth="lg" className={classes.filterContainer}>
            {FilteredData.length !== 0 &&
              FilteredData.map((item) => (
                <Paper className={classes.paper} elevation={0} key={item.id}>
                  <img
                    onClick={() => handleClick(item.id)}
                    className={classes.img}
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <div className={classes.title}>{item.title}</div>
                </Paper>
              ))}
            {Data === false ? (
              <div className={classes.matchFail}>
                <h2>Couldn't match any Search Results</h2>
              </div>
            ) : (
              <div className={classes.matchFail2}></div>
            )}
          </Container>
        </div>
      </Container>
    </React.Fragment>
  );
}
