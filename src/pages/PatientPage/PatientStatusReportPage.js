import React from 'react';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";

function PatientStatusReportPage() {

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    let image;

    const getImage = () => {
        setTimeout(() => {
            fetch('https://junctionx2021dd.herokuapp.com/getpaint')
            .then(response => response.text())
            .then(data => {
                image = data;
                console.log('Success on loading:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }, 2000)
    }

    getImage();

    return (
        <div className='patient-status-report-page' onLoad={() => {getImage()}}>
            <h1>Please fill the form</h1>
            <Button variant='primary' onClick={() => {
                clickHandler('/submitreport');
            }}>Submit report</Button>
        </div>
    )
}

export default PatientStatusReportPage;