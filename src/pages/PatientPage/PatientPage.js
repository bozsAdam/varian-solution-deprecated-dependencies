import './PatientPage.css';
import React, {useEffect, useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";
import PatientFileComponent from "../../components/PatientFileComponent";
import httpService from "../../services/httpsService";

function PatientPage() {
    const [tabKey, setTabKey] = useState('home');

    const [patient, setPatient] = useState(null);
    const [patientStatusReports, setPatientStatusReports] = useState(null);
    const [isLoadingStatusReports, setIsLoadingStatusReports] = useState(false);

    useEffect(() => {
        httpService.getPatient(1).then(patient => {
            if (patient) {
                setPatient(patient);
                setIsLoadingStatusReports(true)
                httpService.getPatientReports(1).then(patientStatusReports => {
                    if (patientStatusReports) setPatientStatusReports(patientStatusReports);
                    setIsLoadingStatusReports(false);
                });
            }
        })
    });

    const selectStatusReport = (reportId) => {
        // Do nothing!
    }

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    return (
        <div className='patient-page'>
            <Tabs
              activeKey={tabKey}
              id="patient-tab"
              className="mb-3"
              onSelect={(selectedTabKey) => setTabKey(selectedTabKey)}
            >
                <Tab eventKey="home" title="Home">
                    <h1>Home</h1>
                </Tab>
                <Tab eventKey="my-files" title="My Files">
                    {patient && (
                      <PatientFileComponent
                        selectedPatient={patient}
                        selectStatusReport={selectStatusReport}
                        patientStatusReports={patientStatusReports}
                        isLoadingStatusReports={isLoadingStatusReports}
                      />
                    )}
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
                            setTabKey()
                        }}>View status report history</Button>
                    </div>
                </Tab>
                <Tab eventKey="report-history" title="Report History" >
                    <h1>Report History</h1>
                </Tab>
            </Tabs>
        </div>
    )
}

export default PatientPage;