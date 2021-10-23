import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";

function PatientStatusReportPage() {

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    return (
        <div className='patient-status-report-page'>
            <h1>Please mark the areas where you feel pain or uncomfortable</h1>
            <h2>Match the brush color to the severity</h2>
            <iframe src="https://junctionx2021dd.herokuapp.com/paint" style={{width: "600px", height: "600px"}}></iframe>
            <Button variant='primary' onClick={() => {
                clickHandler('/continuereport');
            }}>Next page</Button>
        </div>
    )
}

export default PatientStatusReportPage;