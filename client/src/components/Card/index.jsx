import React from 'react';
import {Link} from 'react-router-dom';
import './card.scss'


function Card(props) {
    return (
        <div className="product-item">
            <div className="product-item-image">
                <Link to="https://www.youtube.com/">
                    <img src="/Assets/images/product3.png"></img>
                </Link>
            </div>

            <div className="product-item-caption">
                <span className="product-item-caption-name">Nike Air Force 1</span>
                <div className="product-item-caption-price">
                    <p className="new">$125</p>
                    <p className="old">$356.00</p>
                </div>
            </div>
        </div>
    );
}

export default Card;