import React from 'react';
import {findByDisplayValue} from "@testing-library/react";

class DoctorPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='doctor-page'>
                <h1 id="title">This is the doctor page!</h1>
            </div>
        )
    }
}

export default DoctorPage;