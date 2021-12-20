import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  FunctionComponent,
} from "react";

export interface DefaultValues {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const defaultValues: DefaultValues = {
  isDarkMode: false,
  setIsDarkMode: () => undefined,
};

export const ThemeContext = createContext<DefaultValues>(defaultValues);

export const ThemeContextProvider: FunctionComponent = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
