import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import './home.css';

function Home(props) {
    return (
        <div>
            <div className="header-wrapper">
                <Header/>
                <Banner/>
            </div>
        </div>
    );
}

export default Home;