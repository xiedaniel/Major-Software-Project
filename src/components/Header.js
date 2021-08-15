import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, Container} from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-3" >
             <Container>
                <Navbar.Brand>Revision App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                    <Nav.Link as={Link} eventKey="/home" to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} eventKey="/library" to="/library">My Library</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                    <Nav.Link as={Link} eventKey="/create" to="/create">Create</Nav.Link>
                    </Nav.Item> */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
