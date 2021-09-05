import { makeStyles } from "@material-ui/core";
import bgimage from "../../assets/OTTbg.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${bgimage})`,
    height: "100vh",
    backgroundSize: "cover",
  },

  body: {
    background: "rgba(0, 0, 0, 0.6)",
    height: "100vh",
  },

  paperStyle: {
    marginTop: "5rem",
    padding: "20px 20px",
    width: 600,
    opacity: "90%",
  },

  textField: {
    marginBottom: 20,
  },

  buttonStyle: {
    marginBottom: "50px",
  },

  headerStyle: {
    fontSize: "30px",
    marginBottom: "15px",
  },
}));

export default useStyles;
