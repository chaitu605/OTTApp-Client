import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

export default function AdminNav() {
  const user = useSelector((state) => state.user);
  const role = user.user_info.roles;
  const data = sessionStorage.getItem("username");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar>
            <div className={classes.navbar}>
              <Link to="/dashboard">
                <img
                  className={classes.img}
                  src="https://fontmeme.com/permalink/210806/240d657b94f89dd474e899cb826c958f.png"
                  alt="MEDIAFLIX LOGO"
                />
              </Link>
            </div>

            <Button component={Link} to="/dashboard" color="inherit">
              <Typography>Home</Typography>
            </Button>
            <Button color="inherit">
              <Typography>{data}</Typography>
            </Button>
            <IconButton color="inherit" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="admin-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {role === "admin" ? (
                <div>
                  <MenuItem
                    component={Link}
                    to="/addvideo"
                    onClick={handleClose}
                  >
                    Add Video
                  </MenuItem>
                  <MenuItem component={Link} to="/logout" onClick={handleClose}>
                    Sign Out
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem
                    component={Link}
                    to="/searchvideo"
                    onClick={handleClose}
                  >
                    Search Video
                  </MenuItem>
                  <MenuItem component={Link} to="/logout" onClick={handleClose}>
                    Sign Out
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
