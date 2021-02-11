import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Cate from './components/Cate_Full';
import './home.scss';

function Home(props) {
    return (
        <div>
            <div className="header-wrapper">
                <Header/>
                <Banner/>
            </div>
            
            <Cate/>
        </div>
    );
}

export default Home;