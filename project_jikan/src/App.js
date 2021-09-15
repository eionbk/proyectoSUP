
import './App.css';
import Header from './components/Header'
import Landing from './components/Landing'
import {BrowserRouter as Router, Link,Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/landing">Landing</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/landing">
          <Landing />
        </Route>
      
    </div>
  </Router>
   
  );
}

export default App;
