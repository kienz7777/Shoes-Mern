import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './footer.scss';


function Footer(props) {
    return (
        <footer>
            <Container>
                <div className="newletter">
                    <div className="newletter-title">
                        <h3>Subscribe Newletter.</h3>
                        <label>Get e-mail updates about our latest shop and special offers.</label>
                    </div>
                    <div className="newletter-content">
                        <form className="newletter-content-frm-subscribe">
                            <input type="text" placeholder="Enter you email address here..." id="subscribe-input"></input>
                            <a className="btn-default btn-subscribe" >
                                Subcribe
                            </a>
                        </form>
                        
                    </div>
                </div>

                <div className="follow">
                    <ul className="follow-link">
                        <li><a><i className="fa fa-twitter"></i></a></li>
                        <li><a><i className="fa fa-google-plus"></i></a></li>
                        <li><a><i className="fa fa-facebook"></i></a></li>
                        <li><a><i className="fa fa-youtube"></i></a></li>
                        <li><a><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>

                <div className="corporate">
                    <div className="corporate-inner">
                        <Row>
                            <Col>
                                <div className="wrapper">
                                    <div className="image">
                                        <img src="/Assets/images/bg_icon1.png" alt="Icon"/>
                                    </div>
                                    <div className="text">
                                        <h3>Free Delivery</h3>
                                        <p>am liber tempor cum soluta nobis eleifend option congue.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="wrapper">
                                    <div className="image">
                                        <img src="/Assets/images/bg_icon2.png" alt="Icon"/>
                                    </div>
                                    <div className="text">
                                        <h3>Money Guarantee</h3>
                                        <p>am liber tempor cum soluta nobis eleifend option congue.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="wrapper">
                                    <div className="image">
                                        <img src="/Assets/images/bg_icon3.png" alt="Icon"/>
                                    </div>
                                    <div className="text">
                                        <h3>Online Support</h3>
                                        <p>am liber tempor cum soluta nobis eleifend option congue.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>      
            </Container>
        </footer>
    );
}

export default Footer;