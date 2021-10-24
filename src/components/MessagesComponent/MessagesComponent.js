import React, {useEffect, useState} from "react";
import './MessagesComponent.css';
import {Button, Card, Form} from "react-bootstrap";

const MessagesComponent = (props) => {
  const {patientList} = props;
  const [selectedPatientForMessage, setSelectedPatientForMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [socket, setSocket] = useState(null);

    useEffect(() => {
        let serverUrl = "ws://localhost:8080/";
        let webSocket = new WebSocket(serverUrl + 'chat');

        webSocket.onmessage = (message) => {
            let parsedData = JSON.parse(message.data);
            parsedData.sender = "Doctor Strange";
            // addMessage(parsedData);
            messages.push(parsedData);
            setMessages([...messages]);
        };
        setSocket(webSocket);
        console.log("successfully connected to socket");
    }, []);


  const addMessage = (message) => {
      const newMessages = [...messages, message];
      setMessages(newMessages);
  }

  const sendMessage = () => {
      socket.send(JSON.stringify({
          "message": text,
          "sentByDoctor": true
      }));
      setText('');
  }

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
              <div id="messageContainer">
                {messages.map((message, key) => {
                    if (message.sentByDoctor) {
                        return (
                            <div key={key} className="card-container left">
                                <Card
                                    bg='dark'
                                    text='light'
                                    className="mb-2 flex-end"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Header>
                                        {message.sender}
                                    </Card.Header>
                                    <Card.Text>
                                        {message.message}
                                    </Card.Text>
                                </Card>
                            </div>
                        )
                    }
                     return (
                         <div key={key} className="card-container right">
                             <Card
                                 bg='light'
                                 text='dark'
                                 className="mb-2 flex-start"
                                 style={{ width: '18rem' }}
                             >
                                 <Card.Header>
                                     {message.sender}
                                 </Card.Header>
                                 <Card.Text>
                                     {message.message}
                                 </Card.Text>
                             </Card>
                         </div>
                     )
                    }
                )}
              </div>


              <div className="fixed-bottom container">
                  <div className="center-align">
                      <div className="row">
                          <Form>
                              <Form.Control
                                  id="chatInput"
                                  onChange={
                                      (event => setText(event.target.value))
                                  }
                                  value={text}
                              />
                                  <Button
                                      id="sendChat"
                                      onClick={(event) => {
                                        sendMessage();
                                      }}
                                  > kattanj rá</Button>
                          </Form>
                      </div>

                  </div>

              </div>


            {/*<MessageComponent message={"mockedMessage"}></MessageComponent>
            <MyMessageComponent message={"mockedMyMessage"}></MyMessageComponent>*/}
          </div>
        ) : (
          <div>Please select Patient to show messages.</div>
        )}
      </div>
    </div>
  );
};

export default MessagesComponent;
