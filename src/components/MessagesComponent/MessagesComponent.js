import React, {useState} from "react";
import './MessagesComponent.css';
import MessageComponent from "../MessageComponent/MessageComponent";

const MessagesComponent = (props) => {
  const {patientList} = props;
  const [selectedPatientForMessage, setSelectedPatientForMessage] = useState(null)

  return (
    <div id='messages-container'>
      <div id='messages-patient-list'>
        {patientList && (patientList.map(patient => {
          return (
            <div
              className='messages-patient-name'
              key={patient.id}
              onClick={() => {
                setSelectedPatientForMessage(patient)
              }}
            >{patient.name}</div>
          )})
        )}
      </div>
      <div id='messages-chat-container'>
        {selectedPatientForMessage ? (
          <div>
            <h3>{selectedPatientForMessage.name}</h3>
            <MessageComponent message={"mockedMessage"}></MessageComponent>
          </div>
        ) : (
          <div>Please select Patient to show messages.</div>
        )}
      </div>
    </div>
  );
};

export default MessagesComponent;
