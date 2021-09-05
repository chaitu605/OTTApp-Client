import { makeStyles } from "@material-ui/core";
import bgimage from "../../assets/404-error-page.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    height: "100vh",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderRadius: "5rem",
    marginTop: "40px",
  },
}));

export default useStyles;
