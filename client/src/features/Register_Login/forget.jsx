import React, { useState } from 'react';
import { Modal } from 'reactstrap';
import './register_login.scss';
import {Link, useHistory} from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Forget(props) {

    const toggleLoginForm = () => {  
        props.toggleLoginForm(); 
        props.toggleForgetForm();     
    }
    
    const toggleForgetForm = () => { 
        props.toggleForgetForm();       
    }

    const [formData, setFormData] = useState({
        email: '',
        textChange: 'Submit'
    });
    
    const { email, textChange } = formData;

    function handleChange(event){
        const text = event.target.name;
        setFormData({...formData, [text]: event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();

    }

    return (
        <div>
            <Modal size="lg" isOpen={props.isOpen}>
                <ToastContainer/>
                <div className="login">
                    <div className="login-btn-cancel">
                        <a onClick={toggleForgetForm}><i class="fa fa-times"></i></a>
                    </div>
                    <Col>
                        <div className="login-modal">
                            <div className="login-modal-content">
                                <div className="login-modal-content-title">
                                    <img className="logo" src="Assets/images/nike-logo.png"/>
                                    <h5>BECOME A NIKE MEMBER</h5>
                                    <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                                </div>



                                <form onSubmit={(event)=>handleSubmit(event)} className="login-frm">
                                    
                                    
                                    <div className="email">
                                        <input type="email" 
                                            className="frm-input frm-error"  
                                            placeholder="Email address"
                                            name = 'email'
                                            onChange={(event)=>handleChange(event)}
                                            value={email}/>
                                        <span className="error-message">&nbsp;</span>
                                    </div>
                                    
                                
                                    <p className="login-frm-forget">Please enter your email address to retrieve your password</p>
                                    <button type="submit" className='btn-register btn-default btn-sign-in'>
                                        {textChange}
                                    </button>
                                    
                                </form>
                                
                                
                                <div className="login-modal-content-else">
                                    <label>Already a member?</label>
                                    <a onClick={toggleLoginForm}>Sign In</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </Modal>
        </div>
    );
}

export default Forget;