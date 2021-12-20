import { useContext } from "react";
import { ThemeContext, DefaultValues } from "../contexts/ThemeContext";

export const useThemeContext = (): DefaultValues => useContext(ThemeContext);
