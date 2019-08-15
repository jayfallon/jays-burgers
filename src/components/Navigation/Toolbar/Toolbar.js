import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div>
      <Logo />
    </div>
    <nav>
      <ul>...</ul>
    </nav>
  </header>
);

export default toolbar;
