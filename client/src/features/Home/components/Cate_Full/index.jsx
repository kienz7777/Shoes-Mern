import React from 'react';
import './cate.scss';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

function Cate_Full(props) {
    return (
        <div className="cate-full">
            <section>
                <Container>
                    <div className="cate-feature">
                        {/* <div className="cate-main-image">
                            <img src="/Assets/images/nike-logo.png" alt="">
                            </img>
                        </div> */}
                        <div className="cate-title">
                            <img src="/Assets/images/fromsunup.png" alt=""/>
                        </div>
                        <span className="cate-description">
                            <h6>
                            From the mat to the couch and everything in between—our new, crazy-soft yoga apparel keeps you in downright all-day bliss.
                            </h6>
                        </span>
                        <Link to="/products" className="btn-default btn-subscribe">
                            Shop now
                        </Link>
                    </div>

                    <div className="trending">
                        <Row>
                            <Col lg="6" xs="6" className="coll">
                                <div className="image-card">
                                    <div className="image-wrapper">
                                        <img src="/Assets/images/trending1.jpg" alt=""/>
                                    </div>
                                    <div className="caption">
                                        <p>Nike Air Zoom SuperRep 2</p>
                                        <Link to="/products" className="btn-default btn-subscribe">
                                            Shop now
                                        </Link>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="6" xs="6" className="coll">
                                <div className="image-card">
                                    <div className="image-wrapper">
                                        <img src="/Assets/images/trending2.jpg" alt=""/>
                                    </div>
                                    <div className="caption">
                                        <p>Jordan 'Why Not?' Zero.4</p>
                                        <Link to="/products" className="btn-default btn-subscribe">
                                            Shop now
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default Cate_Full;