import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            首页
          </Link>
          <Link to="/about" className={classes.link}>
            关于
          </Link>
          <Link to="/contact" className={classes.link}>
            联系
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
