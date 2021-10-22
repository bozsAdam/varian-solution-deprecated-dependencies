import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

function DoctorPage() {


    return (
        <div className='doctor-page'>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <h1>Home</h1>
                </Tab>
                <Tab eventKey="patient-file" title="Patient File">
                    <h1>Patient File</h1>
                </Tab>
                <Tab eventKey="messages" title="Messages" >
                    <h1>Messages</h1>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DoctorPage;