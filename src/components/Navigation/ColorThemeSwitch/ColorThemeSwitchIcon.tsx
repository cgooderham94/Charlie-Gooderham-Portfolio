import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { colorThemeSwitchIcon } from "./ColorThemeSwitch.css";
import {
  THEME_COLOR_DARK_BACKGROUND,
  THEME_COLOR_LIGHT_BACKGROUND,
} from "../../../theme/constants";

interface ColorThemeSwitchIconProps {
  theme: "light" | "dark";
}

const themes = {
  dark: {
    icon: faMoon,
    color: THEME_COLOR_DARK_BACKGROUND,
  },
  light: {
    icon: faSun,
    color: THEME_COLOR_LIGHT_BACKGROUND,
  },
};

export const ColorThemeSwitchIcon: FunctionComponent<
  ColorThemeSwitchIconProps
> = ({ theme }) => {
  return (
    <div className={colorThemeSwitchIcon}>
      <FontAwesomeIcon
        icon={themes[theme].icon}
        color={themes[theme].color}
        size="lg"
      />
    </div>
  );
};
