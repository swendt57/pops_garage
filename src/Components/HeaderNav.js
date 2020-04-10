import React from "react";

import banner from '../assets/images/banner-new.jpg';
import bg from '../assets/images/bg.jpg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

let beachDiv = {
    backgroundImage: "url(" + banner + "), url(" + bg + ")",
    backgroundRepeat: "no-repeat, repeat",
    backgroundPositionX: "120px, 0"
};

let bgDiv = {
    backgroundImage: "url(" + bg + ")",
    backgroundRepeat: "repeat",
    height: "119px",
    margin: "0",
    padding: "0"
};

const HeaderNav = () => {

    return (
        <header>
            <div className="nav-wrapper">
            <div style={bgDiv}/>
            <Navbar bg="light" expand="lg" style={beachDiv}>
                <Navbar.Brand href="#home" className="logo-container">
                    <div className="logo-wrapper">
                        <div className="title">Pop's Garage</div>
                        <div className="subtitle">Beach Bum Cove, California</div>
                        <div className="tag-line">"a bit north of Margaritaville"</div>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="#link">Showroom</Nav.Link>
                        <Nav.Link href="#link">Tire Kicking</Nav.Link>
                        <Nav.Link href="#link">The Livery</Nav.Link>
                        <Nav.Link href="#link">Club News</Nav.Link>
                        <Nav.Link href="#link">The Library</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider/>*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    {/*<Form inline>*/}
                    {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                    {/*    <Button variant="outline-success">Search</Button>*/}
                    {/*</Form>*/}
                </Navbar.Collapse>
            </Navbar>
            </div>
        </header>
    )
};


export default HeaderNav;

//style={beachDiv}