import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { makeStyles } from "@mui/styles"
import {Link} from "react-router-dom"
import { useAuthContext } from "../context/AuthContextProvider";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0097a7",
  },
  title: { color: "black"
  },

});

export default function Navbar() {
    const{currentUser} = useAuthContext()
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            style={{ fontSize: "2rem", fontFamily: "Girassol" }}
            className={classes.title}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Social Blog
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ fontSize: "2.5rem" }} />
            </IconButton>
            {currentUser?.email ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link
                  to="/profile"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link
                  to="/new-blog"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                </Link>
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Link>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                </Link>
                <Link
                  to="/register"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {" "}
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                </Link>
              </Menu>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
