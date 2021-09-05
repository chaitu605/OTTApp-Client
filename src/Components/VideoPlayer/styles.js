import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "4rem",
    color: "white",
    marginBottom: "20rem",
  },

  buttonGrp: {
    display: "flex",
    justifyContent: "right",
    marginBottom: "5px",
  },

  editButton: {
    marginRight: "2px",
    borderRadius: "10px",
  },

  deleteButton: {
    borderRadius: "10px",
  },

  input: {
    color: "#8e95a5",
  },

  videoDetails: {
    display: "flex",
  },

  titleStyle: {
    flexGrow: "1",
    fontSize: "1.5rem",
    marginTop: "1rem",
  },

  likeicon: {
    color: "white",
  },

  likenumber: {
    cursor: "pointer",
  },

  dislikenumber: {
    cursor: "pointer",
  },

  descripStyle: {
    marginTop: "1rem",
  },

  divider: {
    background: "white",
    marginTop: "2rem",
  },

  comment: {
    marginTop: "2rem",
  },

  textfield: {
    display: "flex",
    flexGrow: "1",
    marginTop: "1rem",
  },

  cmtButton: {
    color: "white",
  },

  posted: {
    color: "white",
  },

  paper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "1rem",
    background: "none",
  },

  avatar: {
    marginRight: "0.5rem",
  },
}));

export default useStyles;
