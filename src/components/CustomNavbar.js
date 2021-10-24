import React, {Component} from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";

class CustomNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/home">Follow Up</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/patient">Patient</Nav.Link>
                            <Nav.Link href="/doctor">Doctor</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default CustomNavbar;