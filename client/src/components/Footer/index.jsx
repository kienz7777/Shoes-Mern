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

                <div className="footer-top">
                    <Row>
                        <Col lg="4" xs="4">
                            <a className="footer-top-logo"><img src="/Assets/images/nike-logo.png" alt="Logo"/></a>
                            <p className="footer-top-des">We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                            <ul className="footer-top-contact">
                                <li className="address">
                                    <i className="fa fa-map-marker"></i>
                                    <p>Address : No 40 Baria Sreet 133/2, NewYork, USA.</p>
                                </li>
                                <li className="phone">
                                    <i className="fa fa-phone"></i>
                                    <p>Phone: +(1234) 567 890</p>
                                </li>
                                <li className="mail">
                                    <i className="fa fa-envelope-o"></i>
                                    <p>kienvu7777@gmail.com</p>
                                </li>
                            </ul>
                        </Col>

                        <Col lg="3" xs="3">
                            <h5>Information</h5>
                            <ul className="footer-top-information">
                                <li><a>About Us</a></li>
                                <li><a>Delivery Information</a></li>
                                <li><a>Privacy Policy</a></li>
                                <li><a>Term, Conditions</a></li>
                                <li><a>Brands</a></li>
                                <li><a>Gift Certificate</a></li>
                            </ul>
                        </Col>

                        <Col lg="3" xs="3">
                            <h5>Customer Service</h5>
                            <ul className="footer-top-information">
                                <li><a>Contact Us</a></li>
                                <li><a>Returns</a></li>
                                <li><a>Site Map</a></li>
                                <li><a>Affiliate</a></li>
                                <li><a>Specials</a></li>
                                <li><a>Newletters</a></li>
                            </ul>
                        </Col>

                        <Col lg="2" xs="2">
                            <h5>Instagram</h5>
                            <ul className="footer-top-information">
                                <li>kzshoe7</li>
                            </ul>
                        </Col>

                    </Row>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-copyright">
                        <p>Copyright © 2021 By Kienz. All Right Reserved.</p>
                    </div>
                    <div className="footer-bottom-payment">
                        <img src="/Assets/images/payment.png" alt="Payment"/>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;