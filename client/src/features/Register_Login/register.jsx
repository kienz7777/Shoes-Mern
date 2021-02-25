import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col } from 'reactstrap';
import { Modal } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css'

function Register(props) {

    const toggleLoginForm = () => {  
        props.toggleLoginForm(); 
        props.toggleRegisterForm();     
    }
    
    const toggleRegisterForm = () => { 
        props.toggleRegisterForm();       
    }

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        password1: '',
        password2: '',
        textChange: 'Sign Up'
    });

    const {name,address,phone,email,password1,password2,textChange} = formData;

    // Handle change form inputs
    function handleChange(event){
        const text = event.target.name;
        setFormData({...formData,[text]: event.target.value});
    }

    // Handle submit data
    function handleSubmit(event){
        event.preventDefault();
    }

    return (
        <div>
            <Modal size="lg" isOpen={props.isOpen}>
                <ToastContainer/>
                <div className="login">
                    <div className="login-btn-cancel">
                        <a onClick={toggleRegisterForm}><i class="fa fa-times"></i></a>
                    </div>
                    <Col>
                        <div className="login-modal">
                            <div className="login-modal-content">
                                <div className="login-modal-content-title">
                                    <img className="logo" src="/Assets/images/nike-logo.png"/>
                                    <h5>BECOME A NIKE MEMBER</h5>
                                    <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                                </div>

                                <form onSubmit={(event)=>handleSubmit(event)} className="login-frm">
                                    <div className="name">
                                        <input 
                                            type="text" 
                                            className="frm-input frm-error"  
                                            placeholder="Name"
                                            name = 'name'
                                            onChange={(event)=>handleChange(event)}
                                            value={name}/>
                                        <span className="error-message">&nbsp;</span>    
                                    </div>

                                    <div className="address">
                                        <input 
                                            type="text" 
                                            className="frm-input frm-error"  
                                            placeholder="Address"
                                            name = 'address'
                                            onChange={(event)=>handleChange(event)}
                                            value={address}/>
                                        <span className="error-message">&nbsp;</span>    
                                    </div>

                                    <div className="phone">
                                        <input type="text" 
                                            className="frm-input frm-error" 
                                            placeholder="Phone Number"
                                            name = 'phone'
                                            onChange={(event)=>handleChange(event)}
                                            value={phone}/> 
                                        <span className="error-message">&nbsp;</span>
                                    </div>
                                    
                                    <div className="email">
                                        <input type="email" 
                                            className="frm-input frm-error"  
                                            placeholder="Email address"
                                            name = 'email'
                                            onChange={(event)=>handleChange(event)}
                                            value={email}/>
                                        <span className="error-message">&nbsp;</span>
                                    </div>
                                    <div className="password">
                                        <div className="field1">
                                            <input 
                                                type="password" 
                                                className="frm-input frm-error"  
                                                placeholder="Password"
                                                name = 'password1'
                                                onChange={(event)=>handleChange(event)}
                                                value={password1}/>
                                            <span className="error-message">&nbsp;</span>
                                        </div>
                                        <div className="field2">
                                            <input 
                                                type="password" 
                                                className="frm-input frm-error"  
                                                placeholder="Confirm Password"
                                                name = 'password2'
                                                onChange={(event)=>handleChange(event)}
                                                value={password2}/>     
                                            <span className="error-message">&nbsp;</span>   
                                        </div>
                                    </div>
                                    <p>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
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

export default Register;