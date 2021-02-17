import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

import './hotprice.scss';

function Hot_Price(props) {
    return (
        <div className="hot-product">
            <Container fluid={true}>
                <div className="hot-title">
                    <div className="hot-title-image">
                        <img src="/Assets/images/hot-price.png" alt=""></img>
                    </div>
                </div>

                <div className="hot-shoe">

                </div>
            </Container>
        </div>

    );
}

export default Hot_Price;