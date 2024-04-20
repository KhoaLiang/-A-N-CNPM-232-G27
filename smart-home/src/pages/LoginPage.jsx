import React, { useState } from 'react';
import { signIn } from '../api/userApi'; // replace with the actual path
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../css/LoginPage.css';
import logo from '../img/Logo.png';

const LoginPage = () => {
    // ...

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
    event.preventDefault();
    const formValue = { email, password };
    console.log(formValue); // check the form value
    const data = await signIn(formValue);
    console.log(data); // handle the response as needed
    };

    // ...
    return (
        
            <div className='container vh-100 align-items-center'>
                <div className='row justify-content-center align-items-center d-flex vh-100'>
                    <form className='col-10 col-md-6 col-lg-4 border border-dark p-3 rounder-border login-form' onSubmit={handleSubmit}>
                        <img src={logo} alt="" className='logo'/>
                        <div className='form-group m-3'>
                            <input type='text' className='form-control' id='username' placeholder='Enter Username' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group m-3'>
                            <input type='password' className='form-control' id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Login</button>
                        <p className='text-center mt-3'><a href='./forgot'>Forget password?</a></p>
                    </form>
                </div>
            </div>
    );
};

export default LoginPage;