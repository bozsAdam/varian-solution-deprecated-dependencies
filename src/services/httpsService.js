import axios from "axios";
import {parseTreatmentType} from "../common/functions";

class HttpsService {
  getPatientList = () => {
    return axios.get('https://varian-dd-2021.herokuapp.com/patient/list')
      .then(response => response.data)
      .then(patientListResponse => {
        patientListResponse.map(patientEntity => {
          patientEntity.diagnosisYear = (new Date(patientEntity.diagnosisYear)).getFullYear();
          patientEntity.treatmentType = parseTreatmentType(patientEntity.treatmentType);
          return patientEntity;
        });
        return patientListResponse;
      })
      .catch(e => {
        console.log('Error: ', e);
      });
  }

  getPatientReports = (patientId) => {
    return axios.get(`https://varian-dd-2021.herokuapp.com/patient/${patientId}/statusreports`)
      .then(response => response.data)
      .then(patientStatusReportsResponse => {
        return patientStatusReportsResponse;
      })
      .catch(e => {
        console.log('Error: ', e);
      });
  }
}

const httpService = new HttpsService();
export default httpService;

