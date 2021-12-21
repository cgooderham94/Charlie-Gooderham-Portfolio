import { FunctionComponent, useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { appStyle } from "./index.css";
import { darkTheme, lightTheme } from "./theme/themes.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./containers/Landing/Landing";
import Portfolio from "./containers/Portfolio/Portfolio";
import GetInTouch from "./containers/GetInTouch/GetInTouch";
import classes from "./App.module.css";
import { useIsDarkMode } from "./hooks/useIsDarkMode";
import { joinClasses } from "./utils/strings";

export const App: FunctionComponent = () => {
  const { isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode } =
    useIsDarkMode();
  const isFirstRender = useRef(true);

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Ensure we apply the correct theme on the first render
  if (isFirstRender.current && prefersDarkMode) {
    prefersDarkMode ? setIsDarkMode(true) : setIsDarkMode(false);
  }

  const themeClass = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [isFirstRender]);

  return (
    <div id="app" className={joinClasses([appStyle, themeClass])}>
      <BrowserRouter>
        <Navigation></Navigation>

        <main className={classes.App}>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route exact path="/portfolio">
              <Portfolio />
            </Route>

            <Route exact path="/get-in-touch">
              <GetInTouch />
            </Route>
          </Switch>

          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {`Toggle ${isDarkMode ? "Light" : "Dark"} Mode`}
          </button>
        </main>
      </BrowserRouter>
    </div>
  );
};
