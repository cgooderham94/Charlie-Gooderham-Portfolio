import { FunctionComponent } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import classes from "./NavItem.module.css";

interface NavItemProps {
  linkParams: NavLinkProps;
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  linkParams,
  children,
}) => {
  return (
    <li className={classes.NavItem}>
      <NavLink {...linkParams}>{children}</NavLink>
    </li>
  );
};
