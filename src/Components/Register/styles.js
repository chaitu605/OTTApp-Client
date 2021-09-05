import { makeStyles } from "@material-ui/core";
import bgimage from "../../assets/OTTbg.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${bgimage})`,

    backgroundSize: "cover",
  },

  body: {
    background: "rgba(0, 0, 0, 0.6)",
  },

  text: {
    marginTop: "10rem",
    color: "white",
  },

  text1: {
    fontSize: "3rem",
    lineHeight: "3rem",
  },

  paperStyle: {
    marginTop: "1rem",
    padding: "20px 20px",
    width: 400,
    opacity: "90%",
    backgroundColor: "white",
    marginBottom: "10rem",
  },

  avatarStyle: {
    backgroundColor: "#ff0055",
  },

  header: {
    marginTop: 0,
    marginBottom: 20,
  },

  para: {
    margin: "10px",
    fontSize: "15px",
  },

  textField: {
    marginBottom: 20,
  },

  button: {
    marginBottom: "10px",
  },

  buttonIcon: {
    marginLeft: "5px",
    fontSize: "5px",
  },

  divider: {
    margin: "5px",
  },
}));

export default useStyles;
