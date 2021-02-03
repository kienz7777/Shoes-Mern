import React, { useEffect, useRef, useState } from 'react';
import './header.css'
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";


function Header(props) {
    return (
        <header>
            <Container>
                <Row>
                    <Col >
                        <nav className="desk-menu">
                            <ul>
                                <li className="active itemMenu">
                        
                                    <NavLink to='/' className="layer1" title="Home">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="itemMenu">
                                    <div className="menu-cate">
                                        <a className="layer1" href="/" title="Home">
                                            Categories
                                            <i className="fa fa-chevron-down dropdown" aria-hidden="true"></i>
                                        </a>
                                        <div className="popup-cate">
                                            <div className="block">
                                                <Col>
                                                    <div className="cate-name">
                                                        <a><h4>Nike</h4></a>
                                                    </div>
                                                    <div className="cate-item">
                                                        <a>Newest sneakers</a>
                                                        <a>Running</a>
                                                        <a>Basketball</a>
                                                        <a>Jordan</a>
                                                        <a>Running</a>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="cate-name">
                                                        <a><h4>Adidas</h4></a>
                                                    </div>
                                                    <div className="cate-item">
                                                        <a>Basic</a>
                                                        <a>Ultraboost</a>
                                                        <a>Superstar</a>
                                                        <a>Stan Smith</a>
                                                        <a>Pharell Williams</a>
                                                        <a>TX8</a>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="cate-name">
                                                        <a><h4>Baleciaga</h4></a>
                                                    </div>
                                                    <div className="cate-item">
                                                        <a>Tyrex Sneaker</a>
                                                        <a>Track Sneaker</a>
                                                        <a>Sandal</a>
                                                        <a>Boot</a>
                                                        <a>Speed Sneaker</a>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div> 
                                    </div>
                                </li>

                                <li className="itemMenu">
                                    <a className="layer1" href="/" title="Home">
                                        Blog
                                    </a>  
                                </li>
                                
                                <li className="itemMenu">
                                    <a className="layer1" href="/" title="Home">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;