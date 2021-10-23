import './PatientPage.css';
import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";

function PatientPage() {

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    return (
        <div className='patient-page'>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <h1>Home</h1>
                </Tab>
                <Tab eventKey="my-files" title="My Files">
                    <h1>Patient File</h1>
                </Tab>
                <Tab eventKey="messages" title="Messages" >
                    <h1>Messages</h1>
                </Tab>
                <Tab eventKey="status-report" title="Status report" >
                    <div id='status-report-page'>
                        <Button id='create-btn' variant='primary' onClick={() => {
                            clickHandler('/createreport');
                        }}>Create status report</Button>
                        <Button id='view-btn' variant='primary' onClick={() => {
                            clickHandler('/viewreports');
                        }}>View status report history</Button>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default PatientPage;