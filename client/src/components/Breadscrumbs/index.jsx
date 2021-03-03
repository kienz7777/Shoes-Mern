import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './breadscrumbs.scss';


function Breadcrumbs(props) {

    const renderLinkBack = (linkBack) => {
        switch (linkBack){
            case 'Home':
                return (<BreadcrumbItem><a href="/">{props.linkBack}</a></BreadcrumbItem>)
            case 'Product':
                return (<BreadcrumbItem><a href="/products">{props.linkBack}</a></BreadcrumbItem>)
        }
    }

    return (
        <div className="breadcrumb-section">
            <Container>
                <Row>
                    <Col>
                        <img src="/Assets/images/breadscrumb.png" alt="Breadscrumb"/>
                        
                        <div className="breadcrumb-section-inner">
                            <h2>{props.title}</h2>
                            <Breadcrumb>
                                {renderLinkBack(props.linkBack)}
                                <BreadcrumbItem active>{props.active}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Breadcrumbs;