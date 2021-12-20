import { Dispatch, SetStateAction } from "react";
import { useThemeContext } from "./useThemeContext";

interface UseIsDarkMode {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const useIsDarkMode = (): UseIsDarkMode => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  return { isDarkMode, setIsDarkMode };
};
