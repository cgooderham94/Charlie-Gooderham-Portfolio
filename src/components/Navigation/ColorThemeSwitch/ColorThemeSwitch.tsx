import { useIsDarkMode } from "../../../hooks/useIsDarkMode";
import Switch from "react-switch";
import { screenReaderContent } from "../../../styles/helpers/ScreenReader.css";
import { colorThemeSwitch } from "./ColorThemeSwitch.css";
import { ColorThemeSwitchIcon } from "./ColorThemeSwitchIcon";
import {
  THEME_COLOR_DARK_BACKGROUND,
  THEME_COLOR_DARK_SECONDARY,
  THEME_COLOR_LIGHT_BACKGROUND,
  THEME_COLOR_LIGHT_SECONDARY,
} from "../../../theme/constants";

export const ColorThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useIsDarkMode();

  return (
    <label>
      <span className={screenReaderContent}>Toggle dark mode</span>
      <Switch
        onColor={THEME_COLOR_LIGHT_BACKGROUND}
        onHandleColor={THEME_COLOR_LIGHT_SECONDARY}
        offColor={THEME_COLOR_DARK_BACKGROUND}
        offHandleColor={THEME_COLOR_DARK_SECONDARY}
        className={colorThemeSwitch}
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={!!isDarkMode}
        checkedIcon={<ColorThemeSwitchIcon theme="dark" />}
        uncheckedIcon={<ColorThemeSwitchIcon theme="light" />}
      />
    </label>
  );
};
