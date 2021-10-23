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
            <h1>Please fill the form</h1>
            <Button variant='primary' onClick={() => {
                clickHandler('/submitreport');
            }}>Submit report</Button>
        </div>
    )
}

export default PatientStatusReportPage;