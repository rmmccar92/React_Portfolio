import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  drawer: {
    backgroundColor: "#1a1a1a",
  },
  link: {
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
  },
  icon: {
    color: "white",
    "&:hover": {
      color: "#00FFBF",
      borderBottom: "2px solid #00FFBF",
      border: "0.75px solid #00FFBF",
      borderTop: "2px solid #00FFBF",
    },
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/about">
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/projects">
                Projects
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link} to="/contact">
                Contact
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        className={classes.icon}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
