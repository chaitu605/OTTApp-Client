import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

  matchFail: {
    marginBottom: "10rem",
    textAlign: "center",
  },

  matchFail2: {
    marginBottom: "10rem",
  },

  row: {
    color: "#fff",
  },

  rowHeader: {
    marginBottom: "10px",
  },

  paper: {
    backgroundColor: "inherit",
    marginTop: "5px",
    height: "250px",
    marginRight: "15px",
    textOverflow: "ellipsis",
    textAlign: "center",
    overflow: "hidden",
    cursor: "pointer",
  },

  img: {
    height: 200,
    width: 280,
  },

  title: {
    width: "280px",
    textOverflow: "ellipsis",
    color: "#fff",
  },

  buttonGrp: {
    display: "flex",

    justifyContent: "center",
  },

  editButton: {
    marginRight: "2px",
    borderRadius: "10px",
  },

  deleteButton: {
    borderRadius: "10px",
  },
}));
export default useStyles;
