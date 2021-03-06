import React from 'react';
import { useState, useEffect } from 'react';
import './backtotop.scss'

function BackToTop(props) {

    //State
    const[showBackToTop, setShowBackToTop] = useState(false);

    const handleShowBackToTop = () => {
        // Nếu kéo qua vị trí 0 thì hiển thị header
        if(window.scrollY > 800){
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
        // console.log(showBackToTop);
    }

    useEffect(() => {
        // Hiển thị header khi scroll 
        window.addEventListener("scroll",handleShowBackToTop,{ passive: true });
        return () => {
            window.removeEventListener("scroll", handleShowBackToTop);
        };
    },[showBackToTop]);

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <div className="back-to-top-section">
            <div className={showBackToTop ? "back-to-top-show" : "back-to-top-hide"}>
                <a onClick={scrollTop}>
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default BackToTop;