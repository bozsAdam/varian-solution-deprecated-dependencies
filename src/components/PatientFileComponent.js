import React from "react";
import {Col, Container, Dropdown, Row} from "react-bootstrap";


export default function PatientFileComponent(props) {
  const {
    selectedPatient,
    selectStatusReport,
    patientStatusReports,
    isLoadingStatusReports
  } = props;

  return (
    <>
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
            { patientStatusReports && patientStatusReports.length ? (
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
            ) :
              isLoadingStatusReports ?
                (<p>Loading...</p>) :
                (<p>There is no Status Report yet.</p>)}
          </Col>
        </Row>
      </Container>
    </>
  );
};
