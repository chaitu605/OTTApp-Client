import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function PublicNav() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.header}>
        <AppBar elevation={0} className={classes.appbar}>
          <Toolbar>
            <div className={classes.navbar}>
              <Link to="/">
                <img
                  className={classes.img}
                  src="https://fontmeme.com/permalink/210806/240d657b94f89dd474e899cb826c958f.png"
                  alt="MEDIAFLIX LOGO"
                />
              </Link>
            </div>
            <Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Sign In</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
