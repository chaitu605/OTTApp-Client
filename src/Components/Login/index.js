import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
  setUserData,
  setFacebookLogin,
  setGoogleLogin,
} from "../../actions/setUserdata";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../../apis/loginUser";
import { useToasts } from "react-toast-notifications";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import IconG from "./icon";
import { apis } from "../../constant";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
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
  };

  const submitData = async () => {
    try {
      const data = await loginUser(username, password);
      setUserData(dispatch, data);
      if (data.status === 200) {
        if (data.data.roles === "admin") {
          history.replace("/admin-dashboard");
        } else {
          history.replace("/dashboard");
        }

        addToast("Login Success", {
          appearance: "success",
          autoDismiss: true,
        });
      }
    } catch (e) {
      addToast("Something went wrong!", {
        appearance: "error",
        autoDismiss: true,
      });
      setTimeout(() => {
        window.location.reload("/");
      }, 2000);
    }
  };

  const googleSuccess = async (response) => {
    axios({
      method: "POST",
      url: `${apis.googleSignIn}`,
      data: {
        tokenId: response.tokenId,
        name: response.profileObj.name,
        email: response.profileObj.email,
      },
    }).then((response) => {
      setGoogleLogin(dispatch, response);
      sessionStorage.setItem("user_data", JSON.stringify(response.data));
      sessionStorage.setItem("username", response.data.username);
      addToast("Google Login Success!", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/dashboard");
    });
  };
  const googleFailure = (response) => {
    console.log(response);
  };

  const responseFacebook = async (res) => {
    axios({
      method: "POST",
      url: `${apis.facebookSignIn}`,
      data: { accessToken: res.accessToken, userID: res.userID },
    }).then((res) => {
      setFacebookLogin(dispatch, res);
      sessionStorage.setItem("user_data", JSON.stringify(res.data));
      sessionStorage.setItem("username", res.data.username);
      addToast("Facebook Login Success!", {
        appearance: "success",
        autoDismiss: true,
      });
      history.push("/dashboard");
    });
  };

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.body}>
          <Grid container align="center" justifyContent="center">
            <Paper elevation={20} className={classes.paperStyle}>
              <Grid>
                <form onSubmit={handleSubmit(submitData)}>
                  <div>
                    <Avatar className={classes.avatarStyle}>
                      <LockIcon />
                    </Avatar>
                    <h2 className={classes.header}>Sign In</h2>
                    <Divider />
                    <Typography className={classes.para}>
                      Sign In with User Account
                    </Typography>
                    <TextField
                      className={classes.textField}
                      id="outlined-basic"
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
                      id="outlined-basic1"
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
                      Sign In
                      <span className={classes.buttonIcon}>
                        <LockOpenIcon />
                      </span>
                    </Button>
                    <GoogleLogin
                      clientId="351452176420-75k0r7s42ln8edho1tgenjg60l0n7hkd.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <Button
                          className={classes.googleButton}
                          variant="contained"
                          fullWidth
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          startIcon={<IconG />}
                        >
                          Google Sign In
                        </Button>
                      )}
                      onSuccess={googleSuccess}
                      onFailure={googleFailure}
                      cookiePolicy="single_host_origin"
                    />

                    <FacebookLogin
                      appId="528213418406858"
                      render={(renderProps) => (
                        <Button
                          className={classes.facebookButton}
                          variant="contained"
                          color="primary"
                          fullWidth
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          Facebook Sign In
                        </Button>
                      )}
                      autoLoad={false}
                      fields="name,email"
                      callback={responseFacebook}
                    />

                    <Divider className={classes.divider} />
                    <div>
                      <p>
                        New to{" "}
                        <span className={classes.mediaflixtxt}>MEDIAFLIX</span>{" "}
                        ?<Link to="/register">Register Now</Link>.
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
