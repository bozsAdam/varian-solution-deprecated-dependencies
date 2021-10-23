import './DoctorPage.css';
import React, {useState} from 'react';
import {Col, Container, Dropdown, Row, Tab, Table, Tabs} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {demoPatientList} from "../../common/sampleData";

function DoctorPage() {
  const [tabKey, setTabKey] = useState('patient-list');

  const [patientList, setPatientList] = useState(demoPatientList);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedStatusReport, setSelectedStatusReport] = useState(null);

  const selectPatient = (patientId) => {
    const patient = patientList.find(pat => pat.id === patientId);
    setSelectedPatient(patient ? patient : null);
    if (patient) {
      setTabKey('patient-file');
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
                <th>Status Reports</th>
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
                    <Button variant='Primary' onClick={() => {
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
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                      Status Reports
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item >Status Report 1</Dropdown.Item>
                      <Dropdown.Item >Status Report 2</Dropdown.Item>
                      <Dropdown.Item >Status Report 3</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Container>
          </Tab>
        )}
        {selectedStatusReport && (
          <Tab eventKey="messages" title="Patient Status Report" >
            <h1>Patient Status Report</h1>
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