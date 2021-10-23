import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useHistory} from "react-router-dom";
import {FormGroup} from "react-bootstrap";

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

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target);
        const data = new FormData(e.target);
        const value = Object.fromEntries(data.entries());
        value.topics = data.getAll("topics");
        console.log(value);
    }

    return (
        <div className='patient-status-report-page'>
            <h1>Please fill the form</h1>

            <Form onSubmit={submitForm}>
            <FormGroup role='form'>
                <Form.Label style={{fontWeight: 'bold'}}>Possible late- and long-term effects that someone with this type of cancer and treatment may
                    experience
                </Form.Label>
                <div key={`inline-checkbox`} className="mb-3">
                    <Form.Check
                        inline
                        label="Constipation"
                        name="Constipation"
                        type="checkbox"
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Memory loss"
                        name="Memory loss"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Fatigue"
                        name="Fatigue"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Nausea"
                        name="Nausea"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Hair loss"
                        name="Hair loss"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Peripheral neuropathy (numbness/tingling)"
                        name="Peripheral neuropathy (numbness/tingling)"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Hearing loss"
                        name="Hearing loss"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Pneumonitis or inflammation of lung tissue"
                        name="Pneumonitis or inflammation of lung tissue"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                </div>
                <Form.Label style={{fontWeight: 'bold'}}>Cancer survivors may experience issues with the areas listed below. If you have any concerns
                    in these or other areas, please speak with your doctors or nurses to find out how you can get
                    help with them
                </Form.Label>
                <div key={`inline-checkbox2`} className="mb-3">
                    <Form.Check
                        inline
                        label="Anxiety or depression"
                        name="Anxiety or depression"
                        type="checkbox"
                        id={`inline-checkbox-1`}
                    />
                    <Form.Check
                        inline
                        label="Insurance"
                        name="Insurance"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Sexual Functioning"
                        name="Sexual Functioning"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Emotional and mental health"
                        name="Emotional and mental health"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Memory or concentration loss"
                        name="Memory or concentration loss"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Stopping Smoking"
                        name="Stopping Smoking"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Fatigue"
                        name="Fatigue"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                    <Form.Check
                        inline
                        label="Parenting"
                        name="Parenting"
                        type="checkbox"
                        id={`inline-checkbox-2`}
                    />
                </div>
            </FormGroup>
                <Button variant='primary' type='submit'>Submit report</Button>
            </Form>
        </div>
    )
}

export default PatientStatusReportPage;