import React from "react";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";

export default function PageNotFound() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Container className={classes.body}>
          <Button
            className={classes.button}
            size="large"
            color="secondary"
            variant="outlined"
            component={Link}
            to={"/"}
          >
            Back to Home
          </Button>
        </Container>
      </div>
    </React.Fragment>
  );
}
