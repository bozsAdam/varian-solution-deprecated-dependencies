import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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

            <Form>
                <Form.Label style={{fontWeight: 'bold'}}>Possible late- and long-term effects that someone with this type of cancer and treatment may
                    experience</Form.Label>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Constipation"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Memory loss"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Fatigue"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Nausea"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Hair loss"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Peripheral neuropathy (numbness/tingling)"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Hearing loss"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Pneumonitis or inflammation of lung tissue"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                    </div>
                ))}
                <Form.Label style={{fontWeight: 'bold'}}>Cancer survivors may experience issues with the areas listed below. If you have any concerns
                    in these or other areas, please speak with your doctors or nurses to find out how you can get
                    help with them
                </Form.Label>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Anxiety or depression"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Insurance"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Sexual Functioning"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Emotional and mental health"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Memory or concentration loss"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Stopping Smoking"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Fatigue"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Parenting"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                    </div>
                ))}
            </Form>
            <Button variant='primary' onClick={() => {
                clickHandler('/submitreport');
            }}>Submit report</Button>
        </div>
    )
}

export default PatientStatusReportPage;