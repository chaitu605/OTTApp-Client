import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "static",
    backgroundColor: "rgba(37, 37, 37, 0.35)",
  },

  navbar: {
    flexGrow: 1,
  },

  img: {
    width: "120px",
  },

  searchContainer: {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },

  test: {
    color: "#fff",
  },

  searchInput: {
    color: "#fff",
  },
}));

export default useStyles;
