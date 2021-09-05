import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <Grid item={true} sm={12} md={6} lg={3}>
        <Skeleton
          variant="rect"
          style={{
            borderRadius: "5px",
            marginRight: "2px",
          }}
          width={280}
          height={200}
        />
      </Grid>
      <Grid item={true} sm={12} md={6} lg={3}>
        <Skeleton
          variant="rect"
          style={{
            borderRadius: "5px",
            marginRight: "2px",
          }}
          width={280}
          height={200}
        />
      </Grid>
      <Grid item={true} sm={12} md={6} lg={3}>
        <Skeleton
          variant="rect"
          style={{
            borderRadius: "5px",
            marginRight: "2px",
          }}
          width={280}
          height={200}
        />
      </Grid>
      <Grid item={true} sm={12} md={6} lg={3}>
        <Skeleton
          variant="rect"
          style={{
            borderRadius: "5px",
            marginRight: "2px",
          }}
          width={280}
          height={200}
        />
      </Grid>
      <Grid item={true} sm={12} md={6} lg={3}>
        <Skeleton
          variant="rect"
          style={{
            borderRadius: "5px",
            marginRight: "2px",
          }}
          width={280}
          height={200}
        />
      </Grid>
    </div>
  );
}
