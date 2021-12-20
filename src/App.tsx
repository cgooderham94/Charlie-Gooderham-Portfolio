import { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { appStyle } from "./index.css";
import { darkTheme, lightTheme } from "./theme/themes.css";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./containers/Landing/Landing";
import Portfolio from "./containers/Portfolio/Portfolio";
import GetInTouch from "./containers/GetInTouch/GetInTouch";
import classes from "./App.module.css";
import { useIsDarkMode } from "./hooks/useIsDarkMode";

export const App: FunctionComponent = () => {
  const { isDarkMode: isDarkMode, setIsDarkMode: setIsDarkMode } =
    useIsDarkMode();

  return (
    <div
      id="app"
      className={[appStyle, isDarkMode ? darkTheme : lightTheme].join(" ")}
    >
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
            Toggle Dark Mode
          </button>
        </main>
      </BrowserRouter>
    </div>
  );
};
