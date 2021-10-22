import './App.css';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import DoctorPage from "./pages/DoctorPage";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";


function App() {

    return (
        <div className="App">
            <CustomNavbar />
            <Router >
                <Switch>
                    <Route exact path={['/doctor']} component={DoctorPage}/>
                    <Route exact path={['', '/', '/home']} component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
