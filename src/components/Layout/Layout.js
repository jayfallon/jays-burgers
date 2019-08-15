import React from "react";
import Aux from "../../Hoc/Aux/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDraw";

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
