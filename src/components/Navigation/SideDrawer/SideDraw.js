import React from "react";

import classes from "./SideDrawer.module.css";
import Aux from "../../../Hoc/Aux/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  let attachedCLasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedCLasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedCLasses.join(" ")}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
