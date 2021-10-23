import React from "react";
import {parseB64Image} from "../../common/functions";
import './PatientReportComponent.css';
import {Col, Container, Row} from "react-bootstrap";

const PatientReportComponent = (props) => {
  const {patientStatusReport, patient} = props;

  const createReportImage = (reportImageSource) => {
    const image = parseB64Image(reportImageSource);
    image.id = 'patient-status-report-image';
    return image.outerHTML;
  }

  const getPriorityClassName = (priority) => {
    switch (priority) {
      case 'HIGH':
        return 'high'
      case 'MEDIUM':
        return 'medium';
      case 'LOW':
      default:
        return 'low'
    }
  }

  return (
    <div>
      <h1>Patient Status Report</h1>
      <Container>
        <Row>
          <Col className='col-cell title'>Name</Col>
          <Col className='col-cell'>{patient.name}</Col>
        </Row>
        <Row>
          <Col className='col-cell title'>Priority</Col>
          <Col className='col-cell'><p className={`priority-field ${getPriorityClassName(patientStatusReport.priority)}`}>{patientStatusReport.priority}</p></Col>
        </Row>
        <Row>
          <Col className='col-cell title'>Date</Col>
          <Col className='col-cell'>{patientStatusReport.date}</Col>
        </Row>
        <Row>
          <Col className='col-cell title'>Symptom Areas</Col>
          <Col className='col-cell areas'>
            <div>
              {patientStatusReport.symptomAreas.map((area, index) => {
                return (<p>{`${area}${index !== patientStatusReport.symptomAreas.length - 1 ? ',' : ''}`}</p>)
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='col-cell title'>Lifestyle Areas</Col>
          <Col className='col-cell areas'>
            <div>
              {patientStatusReport.lifestyleAreas.map((area, index) => {
                return (<p>{`${area}${index !== patientStatusReport.lifestyleAreas.length - 1 ? ',' : ''}`}</p>)
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='col-cell title'>Pain Area Map</Col>
          <Col className='col-cell'>
            <div
              id={`report-image-container-${patientStatusReport.id}`}
              dangerouslySetInnerHTML={{__html: createReportImage(patientStatusReport.image)}}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PatientReportComponent;