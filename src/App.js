import './App.css';
import {Router, Route, Switch} from "react-router-dom";
import DoctorPage from "./pages/DoctorPage";
import history from "./services/history";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Router history={history}>
        <Switch>
          <Route exact={true} path={['/doctor']} component={DoctorPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
