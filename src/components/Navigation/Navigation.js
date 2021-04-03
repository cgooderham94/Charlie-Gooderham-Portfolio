import Logo from './Logo/Logo';
import NavItem from './NavItem/NavItem';

import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <nav className={classes.Navbar}>
                <Logo />

                <ul>
                    <NavItem linkParams={{
                        to: '/',
                        exact: true
                    }}>Home</NavItem>
                    <NavItem linkParams={{
                        to: '/portfolio'
                    }}>Portfolio</NavItem>
                    <NavItem linkParams={{
                        to: '/get-in-touch'
                    }}>Let's Chat?</NavItem>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;