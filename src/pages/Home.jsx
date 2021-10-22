import Button from 'react-bootstrap/Button';
import {useHistory} from "react-router-dom";

function Home() {

    const history = useHistory();

    const clickHandler = (route) => {
        history.push(route);
    }

    return (
        <div className='home-page'>
           <Button variant='primary' onClick={() => {
               clickHandler('/patient');
           }} >Patient</Button>
           <Button variant='primary' onClick={() => {
               clickHandler('/doctor');
           }}>Doctor</Button>
        </div>
    )
}

export default Home