import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

const PatientListComponent = (props) => {
  const {patientList, selectPatient} = props;

  return (
    <>
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
    </>
  )
}

export default PatientListComponent;