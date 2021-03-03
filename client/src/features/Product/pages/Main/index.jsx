import React from 'react';
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
        </div>
    );
}

export default Main;