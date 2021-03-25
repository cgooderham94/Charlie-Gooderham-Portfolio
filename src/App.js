import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Content to appear on site</h1>

        <ul>
          <li>
            Basic Nav
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Portfolio?</li>
              <li>Contact/CV</li>
            </ul>
          </li>
          <li>Impact Hero/Header Intro</li>
          <li>LinkedIn Profile</li>
        </ul>
      </div>
    </BrowserRouter>
  );
}

export default App;
