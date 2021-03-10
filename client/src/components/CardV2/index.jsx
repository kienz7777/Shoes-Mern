import React, { useEffect, useState } from 'react';
import './cardV2.scss'
import Star from '../Star';
import {
    NavLink,Link
  } from "react-router-dom";
import { Row, Col } from 'reactstrap';

function CardV2(props) {

    const { productId,
        productName,
        productCategory,
        productColorProductId,
        productImage,
        productPrice,
        numberStar,
        allProductImages} = props;

    // console.log(allProductImages);

    const [isHovered, setIsHovered1] = useState(false);
    const [avatar, setAvatar] = useState(productImage);

    return (
        <div>
            
        </div>
    );
}

export default CardV2;