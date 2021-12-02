import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Drawer from ".//Drawer";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "#1a1a1a",
    maxHeight: "8.75em",
    padding: 0,
  },
  navlinks: {
    marginLeft: theme.spacing(4),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    fontSize: "1.5rem",
    "&:hover": {
      color: "#00FFBF",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginTop: "0",
    marginLeft: theme.spacing(14),
    "&:hover": {
      color: "#00FFBF",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed" className={classes.nav}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          RMM
        </Typography>
        {isMobile ? (
          <Drawer />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/projects" className={classes.link}>
              Projects
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
