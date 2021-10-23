import './Home.css';
import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";

function Home() {

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    return (
        <div id='home-page'>
            <div id='separator-line'/>
            <Button id='patient-btn' variant='primary' onClick={() => {
                clickHandler('/patient');
            }} >Patient</Button>
            <Button id='doctor-btn' variant='primary' onClick={() => {
                clickHandler('/doctor');
            }}>Doctor</Button>
        </div>
    )
}

export default Home