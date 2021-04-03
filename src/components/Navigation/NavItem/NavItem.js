import { NavLink } from 'react-router-dom';

import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={classes.NavItem}>
            <NavLink to="/" {...props.linkParams}>
                { props.children }
            </NavLink>
        </li>
    );
}

export default NavItem;