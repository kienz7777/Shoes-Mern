import React,{useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import CardV2 from '../../../../components/CardV2';
import Pagination from 'reactjs-hooks-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '../../../../api/productApi';
import categoryApi from '../../../../api/categoryApi';
import colorApi from '../../../../api/colorApi';
import Header from '../../../../components/Header';
import Breadcrumbs from '../../../../components/Breadscrumbs';
import './main.scss';
import { Spinner } from 'reactstrap';

function Main(props) {

    //Att
    const [attribute,setAttribute] = useState({
        category:[],
        "colorProducts.color":[],
        "colorProducts.price":[],
    });

    //category
    const [cate,setCate] = useState([]);
    //color
    const [color,setColor] = useState([]);
    //price
    const [price, setPrice] = useState({min:2,max:100});

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