import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Breadcrumbs from '../../../../components/Breadscrumbs';
import './main.scss';

function Main(props) {
    return (
        <div>
            <Breadcrumbs
                title="Product"
                linkBack="Home"
                active="Product"
            />

            <Container>
                <Row>
                    
                </Row>
            </Container>
        </div>
    );
}

export default Main;