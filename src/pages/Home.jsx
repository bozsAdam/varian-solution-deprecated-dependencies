import React from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

function Home() {

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    return (
        <div className='home-page'>
           <Button className='btn btn-primary' onClick={() => {
               clickHandler('/patient');
           }} >Patient</Button>
           <Button className='btn btn-primary' onClick={() => {
               clickHandler('/doctor');
           }}>Doctor</Button>
        </div>
    )
}

export default Home