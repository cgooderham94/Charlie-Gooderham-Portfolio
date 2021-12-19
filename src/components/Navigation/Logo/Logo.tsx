import { NavLink } from "react-router-dom";

import classes from "./Logo.module.css";

// TODO: Add an actual logo
const Logo = () => {
  return (
    <NavLink className={classes.Logo} to="/">
      <span>&lt;</span>
      <span className={classes.LogoInitials}>CG</span>
      <span>/&gt;</span>
    </NavLink>
  );
};

export default Logo;
