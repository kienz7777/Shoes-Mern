import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import './hotprice.scss';
import Card from '../../../../components/Card';

function Hot_Price(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
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
                            <Card/>
                        </div>
                        <div className="item">
                            <Card/>
                        </div>
                        <div className="item">
                            <Card/>
                        </div>
                        <div className="item">
                            <Card/>
                        </div>
                        <div className="item">
                            <Card/>
                        </div>
                        <div className="item">
                            <Card/>
                        </div>
                        
                    </Slider>
                </div>
            </Container>

        </div>

    );
}

  
export default Hot_Price;