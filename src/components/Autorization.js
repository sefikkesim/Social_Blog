import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import blokPng from "../assets/blok.png";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../utils/ToastNotify";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useAuthContext } from "../context/AuthContextProvider";
import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Email is invalid.")
    .min(2, "email should be of minimum 2 characters length.")
    .required("email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});


const useStyles = makeStyles((theme) => ({
  root: {
    height: "calc(100vh - 68px)",
    "& .MuiPaper-root": {
      borderRadius: "10px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 20,
      maxWidth: "500px",
    },
    marginTop: 68,
  },
  image: {
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    // backgroundColor:
    //   theme.palette.type === "dark"
    //     ? theme.palette.grey[900]
    //     : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    // margin: theme.spacing(4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    // margin: theme.spacing(1),
    // width: theme.spacing(25),
    // height: theme.spacing(25),
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  loadingGif: {
    width: 75,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bottomLink: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
}));

function Register() {
  const classes = useStyles();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const { signup, loginWithGoogle, currentUser } = useAuthContext();

  const formik = Formik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await signup(values.email, values.password);
        history("/");
        toastSuccessNotify("Registered successfully!");
      } catch (error) {
        toastErrorNotify(error.message);
      }

      setLoading(false);
    },
  });

  const handleGoogleProvider = () => {
    loginWithGoogle();
  };

  useEffect(() => {
    if (currentUser) {
      history("/");
    }
    console.log({ currentUser });
  }, [currentUser, history]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container justify="center" className={classes.image}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img src={blokPng} style={{ width: 200 }} alt="candela" />
            </Avatar>
            <Typography className={classes.header} component="h1" variant="h5">
              ── Register ──
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoFocus
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {loading ? (
                <div className={classes.loadingContainer}>
                  <img
                    src={loadingGif}
                    alt="Loading"
                    className={classes.loadingGif}
                  />
                </div>
              ) : (
                <>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Register
                  </Button>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleGoogleProvider}
                    className={classes.googleBtn}
                  >
                    With{" "}
                    <img
                      src={googlePng}
                      alt="google"
                      className={classes.googleImg}
                    />
                  </Button>
                </>
              )}
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Register;
