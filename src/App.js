import { 
  BrowserRouter,
  Route,
  Switch
 } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Portfolio from './containers/Portfolio/Portfolio';
import './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
