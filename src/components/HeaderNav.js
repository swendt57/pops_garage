import React from "react";

import bg from '../assets/images/bg-extended.png';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

import $ from 'jquery';

const HeaderNav = props => {

    //TODO Research how to do this properly
    if (props.toggleBanner) {
        $(".navbar").toggleClass("beach-div");
    } else {
        $(".navbar").toggleClass("beach-div");
    }

    let bgDiv = {
        backgroundImage: "url(" + bg + ")",
        backgroundRepeatX: "repeat",
        backgroundRepeatY: "no-repeat",
        marginBottom: "20px",
        borderBottom: "2px solid black"
    };

    return (
        <header>
            <div id="header-bg" style={bgDiv}>
                <div className="container">
                    <Navbar sticky="top" collapseOnSelect bg="light" expand="lg" className="beach-div">
                        <Navbar.Brand href="/">
                            <div className="logo-wrapper">
                                <div className="title">Pop's Garage</div>
                                <div className="subtitle">Beach Bum Cove, California</div>
                                <div className="tag-line">"a bit north of Margaritaville"</div>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="text-right ">
                                <Nav.Item>
                                    <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2" as={Link} to="showroom">Showroom</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3" as={Link} to="tire_kicking">Tire Kicking</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4" as={Link} to="livery">The Livery</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5" as={Link} to="library">The Library</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="6" as={Link} to="club_news">Club News</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
    )
};


export default HeaderNav;
