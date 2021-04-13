import React from 'react'
//import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import './Navbar.scss'

function NavbarComponent() {
    const NavbarStyle = {
        background: "#02121c",
        borderRadius: "0.2rem",
        zIndex: "3"
    }
    const NavBrandStyle = {
        color: "white",
        margin: "2rem 1rem 2rem 2rem",
        fontWeight: "bold",
        fontSize: "x-large"
    }
    const NavLinkStyle = {
        color: "white",
        margin: "1rem 1rem 1rem 1rem",
        letterSpacing: "5px",
        fontSize: "20px",
        fontWeight: "bold"
    }

    return (
        <Navbar style={NavbarStyle} collapseOnSelect expand="lg" variant="dark" >
            <Navbar.Brand style={NavBrandStyle} href="/">Şeyma Nur Arnak</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav style={{ marginRight: "2rem" }}>
                    <Nav.Link style={NavLinkStyle} href="/">Home Page</Nav.Link>
                    <Nav.Link style={NavLinkStyle} href="/script">Scripts</Nav.Link>
                    <Nav.Link style={NavLinkStyle} href="/designs">Designs</Nav.Link>
                    <Nav.Link style={NavLinkStyle} href="/photographs">Photographs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavbarComponent
