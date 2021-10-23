import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function PatientStatusReportPage() {

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
        let groups = {};
        for( let formGroup of e.target.children ) {
            if (formGroup.children.length > 0) {
                let groupEntries = [];
                for( let checkbox of formGroup.children[1].children ) {
                    if (checkbox.children[0].checked === true) {
                        groupEntries.push(checkbox.outerText);
                    }
                }
                let groupName = formGroup.childNodes[0].htmlFor;
                groups[groupName] = groupEntries;
            }
        }
        groups.patient = {id:1};
        groups.image = image;
        groups.priority = "MEDIUM";
        fetch('https://varian-dd-2021.herokuapp.com/statusreport/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...groups}),
        })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='patient-status-report-page'>
            <h1>Please fill the form</h1>

            <Form onSubmit={submitForm}>
            <Form.Group controlId="symptomAreas">
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
            </Form.Group>
            <Form.Group controlId="lifestyleAreas">
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
            </Form.Group>
                <Button variant='primary' type='submit'>Submit report</Button>
            </Form>
        </div>
    )
}

export default PatientStatusReportPage;