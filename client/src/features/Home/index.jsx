import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cate from './components/Cate_Full';
import Hot_Price from './components/Hot_Price';
import './home.scss';

function Home(props) {
    return (
        <div>
            <div className="header-wrapper">
                <Header/>
                <Banner/>
            </div>
            
            <Cate/>
            <Hot_Price/>
            <Footer/>
        </div>
    );
}

export default Home;