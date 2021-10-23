import './DoctorPage.css';
import React, {useEffect, useState} from 'react';
import {Col, Container, Dropdown, Row, Tab, Table, Tabs} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {demoStatusReports, sampleB64Image} from "../../common/sampleData";
import {parseB64Image} from '../../common/functions';
import httpService from '../../services/httpsService';

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
          <h1>Patient List</h1>
          <div id='table-container'>
            <Table striped bordered hover size="sm" id='patient-list'>
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Cancer Type</th>
                <th>Stage</th>
                <th>Diagnosis Year</th>
                <th>Treatment Type</th>
                <th>Patient Files</th>
              </tr>
              </thead>
              <tbody>
              {(patientList && patientList.map(patient => {
                return (<tr key={`key-${patient.id}`}>
                  <td className='table-cell'>{patient.id}</td>
                  <td className='table-cell'>{patient.name}</td>
                  <td className='table-cell'>{patient.cancerType}</td>
                  <td className='table-cell'>{patient.stage}</td>
                  <td className='table-cell'>{patient.diagnosisYear}</td>
                  <td className='table-cell'>{patient.treatmentType}</td>
                  <td>
                    <Button variant='Primary' className='view-file-btn' onClick={() => {
                      selectPatient(patient.id);
                    }}>View File</Button>
                  </td>
                </tr>)
              }))}
              </tbody>
            </Table>
          </div>
        </Tab>
        {selectedPatient && (
          <Tab eventKey="patient-file" title="Patient File">
            <h1>Patient File</h1>
            <Container>
              <Row>
                <Col className='col-cell title'>Name</Col>
                <Col className='col-cell'>{selectedPatient.name}</Col>
                <Col className='col-cell title'>Phone</Col>
                <Col className='col-cell'>{selectedPatient.phoneNumber}</Col>
              </Row>
              <Row>
                <Col className='col-cell title'>Email</Col>
                <Col className='col-cell'>{selectedPatient.email}</Col>
              </Row>
              <Row>
                <Col className='col-cell title'>Cancer Type</Col>
                <Col className='col-cell'>{selectedPatient.cancerType}</Col>
              </Row>
              <Row>
                <Col className='col-cell title'>Diagnosis year</Col>
                <Col className='col-cell'>{selectedPatient.diagnosisYear}</Col>
              </Row>
              <Row>
                <Col className='col-cell title'>Stage</Col>
                <Col className='col-cell'>{selectedPatient.stage}</Col>
              </Row>
              <Row>
                <Col className='col-cell title'>Status Reports</Col>
                <Col className='col-cell'>
                  {patientStatusReports && patientStatusReports.length ? (
                    <Dropdown>
                      <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                        Status Reports
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {patientStatusReports.map(statusReport => {
                          return (<Dropdown.Item key={`patient-status-report-${statusReport.id}`} onClick={() => selectStatusReport(statusReport.id)}>{statusReport.id}</Dropdown.Item>)
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (<p>There is no Status Report yet.</p>)}
                </Col>
              </Row>
            </Container>
          </Tab>
        )}
        {selectedStatusReport && (
          <Tab eventKey="patient-status-report" title="Patient Status Report" >
            <h1>Patient Status Report</h1>
            <h2>{selectedStatusReport.symptoms}</h2>
            <div
              id={`report-image-${selectedStatusReport.id}`}
              dangerouslySetInnerHTML={{__html: injectReportImage(selectedStatusReport.image)}}
            ></div>
          </Tab>
        )}
        <Tab eventKey="messages" title="Messages" >
          <h1>Messages</h1>
        </Tab>
      </Tabs>
    </div>
  )
}

export default DoctorPage;