import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { registerUser } from "../../apis/registerUser";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
  CssBaseline,
  Container,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import useStyles from "./styles";

export default function Register() {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const roles = ["user", "user"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addToast } = useToasts();

  if (sessionStorage.getItem("user_data")) {
    history.push("/dashboard");
  }

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    if (name === "username") {
      setUsername(target.value);
    }
    if (name === "password") {
      setPassword(target.value);
    }
    if (name === "email") {
      setEmail(target.value);
    }
  };

  const submitData = async () => {
    try {
      const data = await registerUser(username, email, password, roles);
      if (data.status === 200) {
        addToast("User registered successfully!", {
          appearance: "success",
          autoDismiss: true,
        });
        setTimeout(() => {
          window.location.replace("/");
        }, 1500);
      }
    } catch (e) {
      console.log(e);
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.body}>
          <Grid container align="center" justifyContent="center">
            <Container className={classes.text}>
              <Typography className={classes.text1}>
                Unlimited movies, TV <br /> Shows and more.
              </Typography>
              <Typography>
                Ready to watch? Resgister yourself and u can explore.
              </Typography>
            </Container>
            <Paper elevation={20} className={classes.paperStyle}>
              <Grid>
                <form onSubmit={handleSubmit(submitData)}>
                  <div>
                    <Avatar className={classes.avatarStyle}>
                      <AccountCircleIcon />
                    </Avatar>
                    <h2 className={classes.header}>Register Here</h2>
                    <Divider />
                    <Typography className={classes.para}>
                      Please fill this form to create an account !
                    </Typography>
                    <TextField
                      className={classes.textField}
                      id="outlined-basic1"
                      label="Username"
                      variant="outlined"
                      fullWidth
                      required
                      {...register("username", { required: true })}
                      onChangeCapture={handleInputChange}
                      type="text"
                      name="username"
                      color="secondary"
                    />
                    <p>{errors.username && "Username is required"}</p>
                    <TextField
                      className={classes.textField}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                      {...register("email", { required: true })}
                      onChangeCapture={handleInputChange}
                      type="email"
                      name="email"
                      color="secondary"
                    />
                    <p>{errors.email && "Email is required"}</p>
                    <TextField
                      className={classes.textField}
                      id="outlined-basic3"
                      label="Password"
                      variant="outlined"
                      fullWidth
                      required
                      {...register("password", { required: true })}
                      onChangeCapture={handleInputChange}
                      type="password"
                      name="password"
                      color="secondary"
                    />
                    <p>{errors.password && "Password is required"}</p>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      className={classes.button}
                    >
                      Create Account
                      <span className={classes.buttonIcon}>
                        <ExitToAppRoundedIcon />
                      </span>
                    </Button>
                    <div>
                      By signing up, you agree to the
                      <a href="/"> Terms of Service </a>
                      and
                      <a href="/"> Privacy Policy</a>
                    </div>
                    <Divider className={classes.divider} />
                    <div>
                      <p>
                        Already have an account?
                        <span>
                          <Link to="/">Sign In</Link>.
                        </span>
                      </p>
                    </div>
                  </div>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}
