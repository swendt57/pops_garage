import React from "react";

import banner from '../assets/images/banner-new.jpg';
import bg from '../assets/images/bg.jpg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const HeaderNav = props => {

    let beachDiv = {};

    if (props.hideBanner) {
        console.log("hiding");
        beachDiv = {
            backgroundImage: "url(" + bg + ")",
            backgroundRepeat: "repeat",
            backgroundPositionX: "0"
        }
    } else {
        console.log("showing");
        beachDiv = {
            backgroundImage: "url(" + banner + "), url(" + bg + ")",
            backgroundRepeat: "no-repeat, repeat",
            backgroundPositionX: "119px, 0",
        }
    }

    let bgDiv = {
        backgroundImage: "url(" + bg + ")",
        backgroundRepeatX: "repeat",
        backgroundRepeatY: "no-repeat",
        // backgroundPositionY: "1px",
        // height: "100%",
        // zIndex: "100",
        marginBottom: "20px",
        borderBottom: "2px solid black"
    };

    return (
        <header>
            {/*  style={bgDiv} */}
            <div id="header-bg" style={beachDiv}>
            <div className="nav-container">
                <div className="nav-wrapper">
                    {/*  style={bgDiv} */}
                    <div/>
                    {/* backgroundColor: "#88bbda",  */}
                    {/*using background here cuts off palm tree on wider screens*/}
                    <Navbar sticky="top" collapseOnSelect expand="lg" style={{backgroundColor: "#88bbda"}} >
                        {/*  style={beachDiv} */}
                        <Navbar.Brand href="#home" className="logo-container">
                            <div className="logo-wrapper">
                                <div className="title">Pop's Garage</div>
                                <div className="subtitle">Beach Bum Cove, California</div>
                                <div className="tag-line">"a bit north of Margaritaville"</div>
                            </div>
                            {/*<img src={banner} style={{margin: 0}}/>*/}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" style={{}}>
                            <Nav className="ml-auto text-right" style={{backgroundColor: "transparent"}}>
                                <Nav.Link eventKey="1" as={Link} to="/" style={{color: "#181cb3"}}>
                                    Home
                                </Nav.Link>
                                <Nav.Link eventKey="2" as={Link} to="showroom" style={{color: "#181cb3"}}>
                                    Showroom
                                </Nav.Link>
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="showroom" className="nav-link">Showroom</Link>
                                <Link to="tire_kicking" className="nav-link">Tire Kicking</Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    {/*<Navbar bg="dark" expand="lg" style={beachDiv}>*/}
                    {/*    <Navbar.Brand href="#home" className="logo-container">*/}
                    {/*        <div className="logo-wrapper">*/}
                    {/*            <div className="title">Pop's Garage</div>*/}
                    {/*            <div className="subtitle">Beach Bum Cove, California</div>*/}
                    {/*            <div className="tag-line">"a bit north of Margaritaville"</div>*/}
                    {/*        </div>*/}
                    {/*    </Navbar.Brand>*/}

                    {/*    <Navbar.Toggle aria-controls="basic-navbar-nav"/>*/}
                    {/*    <Navbar.Collapse id="basic-navbar-nav">*/}

                    {/*        <Nav className="text-right ml-auto">*/}
                    {/*            <Link to="/" className="nav-link">Home</Link>*/}
                    {/*            <Link to="showroom" className="nav-link">Showroom</Link>*/}
                    {/*            <Link to="tire_kicking" className="nav-link">Tire Kicking</Link>*/}
                    {/*            <Link to="livery" className="nav-link">The Livery</Link>*/}
                    {/*            <Link to="library" className="nav-link">The Library</Link>*/}
                    {/*            <Link to="club_news" className="nav-link">Club News</Link>*/}
                    {/*        </Nav>*/}
                    {/*    </Navbar.Collapse>*/}
                    {/*</Navbar>*/}
                </div>
            </div>
            </div>
        </header>
    )
};


export default HeaderNav;

//style={beachDiv}