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

  paperStyle: {
    marginTop: "10rem",
    marginBottom: "15rem",
    padding: "20px 20px",
    width: 400,
    opacity: "90%",
    backgroundColor: "white",
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

  mediaflixtxt: {
    color: "#ff0055",
  },
}));

export default useStyles;
