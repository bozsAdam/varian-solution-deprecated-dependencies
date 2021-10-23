import './DoctorPage.css';
import React, {useEffect, useState} from 'react';
import {Tab, Tabs} from "react-bootstrap";
import httpService from '../../services/httpsService';
import MessagesComponent from "../../components/MessagesComponent/MessagesComponent";
import PatientFileComponent from "../../components/PatientFileComponent";
import PatientListComponent from "../../components/PatientListComponent";
import PatientReportComponent from "../../components/PatientReportComponent/PatientReportComponent";

function DoctorPage() {
  const [tabKey, setTabKey] = useState('patient-list');

  const [patientList, setPatientList] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [patientStatusReports, setPatientStatusReports] = useState(null);
  const [selectedStatusReport, setSelectedStatusReport] = useState(null);
  const [isLoadingStatusReports, setIsLoadingStatusReports] = useState(false);

  useEffect(async () => {
    httpService.getPatientList().then(resp => setPatientList(resp));
  },[])

  const selectPatient = (patientId) => {
    setPatientStatusReports(null);
    setSelectedStatusReport(null);
    const patient = patientList.find(pat => pat.id === patientId);
    setSelectedPatient(patient ? patient : null);
    if (patient) {
      setIsLoadingStatusReports(true);
      httpService.getPatientReports(patient.id).then(statusReports => {
        setPatientStatusReports(statusReports);
        setIsLoadingStatusReports(false);
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
              isLoadingStatusReports={isLoadingStatusReports}
              selectStatusReport={selectStatusReport}
            />
          </Tab>
        )}
        {selectedStatusReport && (
          <Tab eventKey="patient-status-report" title="Patient Status Report" >
            <PatientReportComponent
              patient={selectedPatient}
              patientStatusReport={selectedStatusReport}
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