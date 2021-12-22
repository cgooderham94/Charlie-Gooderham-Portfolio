import Logo from "./Logo/Logo";
import { NavItem } from "./NavItem/NavItem";
import { ColorThemeSwitch } from "./ColorThemeSwitch/ColorThemeSwitch";
import { navbar, navList, navListWrapper } from "./Navigation.css";

const Navigation = () => {
  return (
    <header>
      <nav className={navbar}>
        <Logo />

        <div className={navListWrapper}>
          <ColorThemeSwitch />

          <ul className={navList}>
            <NavItem
              linkParams={{
                to: "/",
                exact: true,
              }}
            >
              Home
            </NavItem>
            <NavItem
              linkParams={{
                to: "/portfolio",
              }}
            >
              Portfolio
            </NavItem>
            <NavItem
              linkParams={{
                to: "/get-in-touch",
              }}
            >
              Let&apos;s Chat?
            </NavItem>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
