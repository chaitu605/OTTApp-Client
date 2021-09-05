import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appbar: {
    height: "55px",
    position: "absolute",
    background: "none",
    backgroundColor: "rgba(37, 37, 37, 0.35)",
  },

  navbar: {
    flexGrow: 1,
  },

  img: {
    width: "120px",
  },
}));

export default useStyles;
