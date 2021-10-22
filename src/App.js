import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from "react-router-dom";
import DoctorPage from "./pages/DoctorPage";
import history from "./services/history";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router history={history}>
        <Switch>
          <Route exact={true} path={['/doctor']} component={DoctorPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
