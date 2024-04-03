import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/LoginPage.css';
import logo from '../img/Logo.png';
const LoginPage = () => {
    return (
        
            <div className='container vh-100 align-items-center'>
                <div className='row justify-content-center align-items-center d-flex vh-100'>
                    <form className='col-4 border border-dark p-3 rounder-border login-form'>
                        <img src={logo} alt="" className='logo'/>
                        <div className='form-group m-3'>
                            <input type='text' className='form-control' id='username' placeholder='Enter Username'/>
                        </div>
                        <div className='form-group m-3'>
                            <input type='password' className='form-control' id='password' placeholder='Enter Password'/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Login</button>
                        <p className='text-center mt-3'><a href='#'>Forget password?</a></p>
                    </form>
                </div>
            </div>
    );
};

export default LoginPage;