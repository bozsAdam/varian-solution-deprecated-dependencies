import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";
import PatientStatusReportPage from "./pages/PatientStatusReportPage";
import PatientStatusReportPainMarkPage from "./pages/PatientStatusReportPainMarkPage";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import React from "react";


function App() {

    return (
        <div className="App">
            <CustomNavbar />
            <Router >
                <Switch>
                    <Route exact path={['/doctor']} component={DoctorPage}/>
                    <Route exact path={['/patient']} component={PatientPage}/>
                    <Route exact path={['', '/', '/home']} component={Home}/>
                    <Route exact path={['/createreport']} component={PatientStatusReportPainMarkPage}/>
                    <Route exact path={['/continuereport']} component={PatientStatusReportPage}/>
                    <Route exact path={['/submitreport']} component={PatientPage}/>
                    <Route exact path={['/viewreports']} component={PatientStatusReportPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
