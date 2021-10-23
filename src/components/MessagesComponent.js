import React from "react";

const MessagesComponent = (props) => {
  const {patientList} = props;

  return (
    <div id='messages-container'>
      <div id='messages-patient-list'>
        {patientList && (patientList.map(patient => {
          return (
            <div key={patient.id}>{patient.name}</div>
          )})
        )}
      </div>
      <div id='messages-chat-container'>

      </div>
    </div>
  );
};

export default MessagesComponent;
