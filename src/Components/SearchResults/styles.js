import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Container: {
    marginBottom: "10rem",
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
    marginRight: "35%",
    marginLeft: "35%",
    marginBottom: "50px",
  },

  inputLabel: {
    color: "#fff",
  },

  searchInput: {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
    color: "#fff",
  },

  header: {
    color: "#fff",
    textAlign: "center",
    marginBottom: "5rem",
  },

  filterContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: "inherit",
    margin: "15px",
    height: 200,
    width: 260,
    textAlign: "center",
    overflow: "hidden",
    cursor: "pointer",
  },

  img: {
    objectFit: "contain",
    height: 150,
  },

  title: {
    width: 260,
    color: "#fff",
  },

  matchFail: {
    color: "#fff",
    textDecoration: "underline",
    marginBottom: "20rem",
  },

  matchFail2: {
    marginBottom: "20rem",
  },
}));

export default useStyles;
