import './DoctorPage.css';
import React, {useEffect, useState} from 'react';
import {Col, Container, Dropdown, Row, Tab, Table, Tabs} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {parseB64Image} from '../../common/functions';
import httpService from '../../services/httpsService';
import MessagesComponent from "../../components/MessagesComponent/MessagesComponent";
import PatientFileComponent from "../../components/PatientFileComponent";
import PatientListComponent from "../../components/PatientListComponent";

function DoctorPage() {
  const [tabKey, setTabKey] = useState('patient-list');

  const [patientList, setPatientList] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientStatusReports, setPatientStatusReports] = useState(null);
  const [selectedStatusReport, setSelectedStatusReport] = useState(null);

  useEffect(async () => {
    httpService.getPatientList().then(resp => setPatientList(resp));
  },[])

  const selectPatient = (patientId) => {
    setPatientStatusReports(null);
    setSelectedStatusReport(null);
    const patient = patientList.find(pat => pat.id === patientId);
    setSelectedPatient(patient ? patient : null);
    if (patient) {
      httpService.getPatientReports(patient.id).then(statusReports => {
        console.log(statusReports);
        setPatientStatusReports(statusReports);
      });
      setTabKey('patient-file');
    }
  }

  const selectStatusReport = (statusReportId) => {
    const statusReport = patientStatusReports.find(statusRep => statusRep.id === statusReportId);
    setSelectedStatusReport(statusReport);
    if (statusReport) {
      setTabKey('patient-status-report');
    }
  }

  const injectReportImage = (reportImageSource) => {
    const image = parseB64Image(reportImageSource);
    return image.outerHTML;
  }

  return (
    <div className='doctor-page'>
      <Tabs
        activeKey={tabKey}
        id="doctor-tabs"
        className="mb-3"
        onSelect={(selectedTabKey) => setTabKey(selectedTabKey)}
      >
        <Tab eventKey="patient-list" title="Patient List">
          <PatientListComponent
            patientList={patientList}
            selectPatient={selectPatient}
          />
        </Tab>
        {selectedPatient && (
          <Tab eventKey="patient-file" title="Patient File">
            <PatientFileComponent
              selectedPatient={selectedPatient}
              patientStatusReports={patientStatusReports}
              selectStatusReport={selectStatusReport}
            />
          </Tab>
        )}
        {selectedStatusReport && (
          <Tab eventKey="patient-status-report" title="Patient Status Report" >
            <h1>Patient Status Report</h1>
            <h2>{selectedStatusReport.symptoms}</h2>
            <div
              id={`report-image-${selectedStatusReport.id}`}
              dangerouslySetInnerHTML={{__html: injectReportImage(selectedStatusReport.image)}}
            />
          </Tab>
        )}
        <Tab eventKey="messages" title="Messages" >
          <h1>Messages</h1>
            <MessagesComponent patientList={patientList}  />
        </Tab>
      </Tabs>
    </div>
  )
}

export default DoctorPage;