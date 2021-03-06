import { Box, Container, Link, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <footer className={classes.footer}>
        <div className={classes.border}></div>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Help</Typography>
              </Box>
              <Typography>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>Account</Typography>
              </Box>
              <Typography>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <Typography>FAQ</Typography>
              </Box>
              <Typography>
                <Link href="/" color="inherit">
                  Legal Notices
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  Terms of Use
                </Link>
              </Typography>
              <Typography>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box textAlign="center" className={classes.trademark}>
            <Typography>
              Mediaflix India &reg;{new Date().getFullYear()}
            </Typography>
          </Box>
        </Container>
      </footer>
    </React.Fragment>
  );
}
