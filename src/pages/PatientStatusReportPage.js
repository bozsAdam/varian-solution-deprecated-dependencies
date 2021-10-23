import React from 'react';
import {Tab, Tabs} from "react-bootstrap";

function PatientStatusReportPage() {

    return (
        <div className='patient-status-report-page'>
            <iframe src="https://junctionx2021dd.herokuapp.com/paint" style={{width: "600px", height: "600px"}}></iframe>
        </div>
    )
}

export default PatientStatusReportPage;