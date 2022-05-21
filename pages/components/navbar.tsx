import React from 'react';
import { Container, Row, Stack, Col, Navbar, Nav } from 'react-bootstrap'


export const Nbar: React.FC = () => {
    return (
    <Container fluid>
        <Row>
            <Col className='sm-10 '>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>BobAir</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </Col>
        </Row>
    </Container>
    );
}