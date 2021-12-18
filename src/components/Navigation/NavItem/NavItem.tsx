import { FunctionComponent } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import classes from './NavItem.module.css';

interface NavItem {
    linkParams: NavLinkProps
}

const NavItem: FunctionComponent<NavItem> = ({linkParams, children}) => {
    return (
        <li className={classes.NavItem}>
            <NavLink {...linkParams}>
                { children }
            </NavLink>
        </li>
    );
}

export default NavItem;