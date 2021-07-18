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
                    <Nav.Link eventKey="/home"><Link to="/">Home</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="/library"><Link to="/library">My Library</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="/create"><Link to="/create">Create</Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
