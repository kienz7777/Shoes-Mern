import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import './hotprice.scss';

function Hot_Price(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="hot-product">
            <Container fluid={true}>
                <div className="hot-title">
                    <div className="hot-title-image">
                        <img src="/Assets/images/hot-price.png" alt=""></img>
                    </div>
                </div>

                <div className="hot-shoe">
                    <Slider {...settings}>
                        <div className="item">
                            
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </Container>
        </div>

    );
}

  
export default Hot_Price;