import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

function PatientPage() {


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
            </Tabs>
            <iframe src="https://junctionx2021dd.herokuapp.com/paint" style={{width: "600px", height: "600px"}}></iframe>
        </div>
    )
}

export default PatientPage;