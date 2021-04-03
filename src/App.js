import { 
  BrowserRouter,
  Route,
  Switch
 } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Landing from './containers/Landing/Landing';
import Portfolio from './containers/Portfolio/Portfolio';
import GetInTouch from './containers/GetInTouch/GetInTouch';
import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <main className={classes.App}>
        <Navigation></Navigation>
        
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/get-in-touch">
            <GetInTouch/>
          </Route>
        </Switch>

      </main>
    </BrowserRouter>
  );
}

export default App;
