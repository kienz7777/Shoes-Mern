import React, { useEffect, useRef, useState } from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import cookie from 'js-cookie';
import Login from '../../features/Register_Login/login';

function Header(props) {

    const [showHeader, setShowHeader] = useState(false);
    const [popoverCart, setPopoverCart] = useState(false);
    const [popoverUser, setPopoverUser] = useState(false);
    const [isReload, setIsReload] = useState(false);

    const handleShowHeader = () => {
    // Nếu kéo qua vị trí 0 thì hiển thị header
        if(window.scrollY > 0){
            setShowHeader(true);
        } else {
            setShowHeader(false);
        }
    }

    useEffect(() => {
    // Hiển thị header khi scroll 
        window.addEventListener("scroll",handleShowHeader,{ passive: true });
        return () => {
            window.removeEventListener("scroll", handleShowHeader);
        };
    },[showHeader]);


    // Bật form LOGIN/REGISTER/FORGET
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);
    const [modalForget, setModalForget] = useState(false);

    const toggleLoginForm = () => {
        setModalLogin(!modalLogin);
        console.log("Login",modalLogin);
    }
    const toggleRegisterForm = () => {
        setModalRegister(!modalRegister);
        console.log("Register",modalRegister);
    }
    const toggleForgetForm = () => {
        setModalForget(!modalForget);
        console.log("Forget",modalForget);
    }

    // Bật popover USER
    const toggleUser = (e) => {
        setPopoverUser(!popoverUser);
    }

    // Bật popover CART
    const toggleCart = (e) => {
        // console.log(e.target.parentElement.id);
        //setPopoverCart(!popoverCart);
    }


    return (
        <header id="header" className={showHeader ? "dark-bg" : "transparent-bg"}>
            <Container>
                <Row>
                    <Col lg="5" className="hidden-sm show-ham">
                        <nav className="desk-menu">
                            <ul>
                                <li className="active itemMenu">
                        
                                    <NavLink to='/' className="layer1" title="Home">
                                        Home
                                    </NavLink>
                                </li>

                                <li className="itemMenu">
                                    <div className="menuCate">
                                        <a className="layer1" href="https://www.youtube.com/" title="Category">
                                            Categories
                                            <i className="fa fa-chevron-down dropdown" aria-hidden="true"></i>
                                        </a>
                                        <div className="menuCate-popupCate">
                                            <div className="menuCate-popupCate-block">
                                                <Col>
                                                    <div className="cate-name">
                                                        <a href="https://www.youtube.com/"><h4>Nike</h4></a>
                                                    </div>
                                                    <div className="cate-item">
                                                        <a href="https://www.youtube.com/">Newest sneakers</a>
                                                        <a href="https://www.youtube.com/">Running</a>
                                                        <a href="https://www.youtube.com/">Basketball</a>
                                                        <a href="https://www.youtube.com/">Jordan</a>
                                                        <a href="https://www.youtube.com/">Running</a>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="cate-name">
                                                        <a href="https://www.youtube.com/"><h4>Adidas</h4></a>
                                                    </div>
                                                    <div className="cate-item">
                                                        <a href="https://www.youtube.com/">Basic</a>
                                                        <a href="https://www.youtube.com/">Ultraboost</a>
                                                        <a href="https://www.youtube.com/">Superstar</a>
                                                        <a href="https://www.youtube.com/">Stan Smith</a>
                                                        <a href="https://www.youtube.com/">Pharell Williams</a>
                                                        <a href="https://www.youtube.com/">TX8</a>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <div className="cate-name">
                                                        <a href="https://www.youtube.com/"><h4>Baleciaga</h4></a>
                                                    </div>
                                                    <div className="cate-item">
                                                        <a href="https://www.youtube.com/">Tyrex Sneaker</a>
                                                        <a href="https://www.youtube.com/">Track Sneaker</a>
                                                        <a href="https://www.youtube.com/">Sandal</a>
                                                        <a href="https://www.youtube.com/">Boot</a>
                                                        <a href="https://www.youtube.com/">Speed Sneaker</a>
                                                    </div>
                                                </Col>
                                            </div>
                                        </div> 
                                    </div>
                                </li>

                                <li className="itemMenu">
                                    <a className="layer1" href="https://www.youtube.com/" title="Home">
                                        Blog
                                    </a>  
                                </li>
                                
                                <li className="itemMenu">
                                    <a className="layer1" href="https://www.youtube.com/" title="Home">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </nav>

                        
                    </Col>

                    <Col xs="4"  className="menu-bar">
                        <ul>
                            <li>
                                <Link >
                                    <span className="bar">

                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col lg="2" xs="4" >
                        {/* <ul>
                            <li>
                                <Link >
                                    <span class="bar">

                                    </span>
                                </Link>
                            </li>
                        </ul> */}

                        <div className="logo-menu">
                            <a href="https://www.youtube.com/">
                                <img src="/Assets/images/nike-logo.png" alt="">

                                </img>
                            </a>
                        </div>
                    </Col>

                    <Col lg="5" xs="4">
                        <nav className="icon">
                            <ul>
                                <li className="search">
                                    <form className="search-form" action='/search' method='GET'>
                                        <input type="search" placeholder="Search" name="name"/>
                                        <a className="search-icon" href="/search">
                                            <img src="/Assets/images/search.png" alt="">
                                            </img>
                                        </a>
                                    </form>
                                </li>
                                {cookie.get('token') ? 
                                    null :  
                                    <li>
                                        <a onClick={toggleLoginForm}>
                                            <img src="/Assets/images/user.png">
                                            </img>
                                        </a>
                                        <Login
                                            isOpen={modalLogin}
                                            toggleLoginForm={toggleLoginForm}
                                            toggleRegisterForm={toggleRegisterForm}
                                            toggleForgetForm={toggleForgetForm}
                                        />
                                        {/* <Register
                                            isOpen={modalRegister}
                                            toggleLoginForm={toggleLoginForm}
                                            toggleRegisterForm={toggleRegisterForm}
                                        />
                                        <Forget
                                            isOpen={modalForget}
                                            toggleLoginForm={toggleLoginForm}
                                            toggleForgetForm={toggleForgetForm}
                                        /> */}
                                    </li>
                                }

                                <li>
                                    <a href="https://www.youtube.com/">
                                        <img src="/Assets/images/like.png" alt="">
                                        </img>
                                    </a>
                                    <span className="count">0</span>
                                </li>
                                <li>
                                    <div className="cart">
                                        <a href="https://www.youtube.com/" id="cart-icon" onClick={(e)=>toggleCart(e)}>
                                            <img src="/Assets/images/cart.png" alt="">
                                            </img> 
                                        </a>
                                        {/* {popoverCart ? 
                                        <MiniCart
                                            wrapperRef = {wrapperRef}
                                        /> 
                                        : null} */}
                                    </div>
                                    <span className="count">
                                        {/* <Count/> */}
                                        0
                                    </span>
                                </li>
                                {/* {cookie.get('token') ? 
                                    <li>
                                        <div className="user">
                                            <a  id="user-icon" onClick={toggleUser}>
                                                <img className="user-image" src={user.avatar ? user.avatar : '/Assets/images/user.jpg'}>
                                                </img> 
                                            </a>
                                            {popoverUser ? 
                                            <div ref={wrapperRef} className="popover-user">
                                                <div className="content">
                                                    <h6>My account</h6>
                                                    <div className="link">
                                                        <Link to="/profile"><i className="fa fa-cog"></i>Profile</Link>
                                                        <a><i className="fa fa-lock"></i>Change password</a>
                                                        <a onClick={()=>logout()}><i class="fa fa-sign-out"></i>Logout</a>
                                                    </div>
                                                </div>
                                            </div>
                                            : null}
                                        </div>
                                    </li> 
                                : null}  */}
                                
                            </ul>
                        </nav>
                    </Col>

                </Row>
            </Container>
        </header>
    );
}

export default Header;