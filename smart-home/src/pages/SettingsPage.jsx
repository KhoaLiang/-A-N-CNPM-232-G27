import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Settings.css";
import { getInfo, updateProfile, updatePassword, updateAddress } from '../api/userApi'; // signIn api
const SettingsPage = () => {
  const [Info, setInfo] = useState('');
  //OTHER CONST
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [address, setAddress] = useState('');
  const fetchInfo = async () => {
    try {
      const data = await getInfo();
      setInfo(data.user);
    } catch (error) {
      console.error("Failed to fetch temperature data: ", error);
    }
  };
  
  //initial fetch
  useEffect(() => {
    fetchInfo();
  }, []);
  useEffect(() => {
    if (Info !== '') {
      console.log(Info);
      setEmail(Info.email);
      setName(Info.name);
      setPhone(Info.phone);
      setImageLink(Info.image);
      setPasswordCurrent(Info.password);
      setAddress(Info.address);
    }
  }, [Info]);

  //handle submition
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to update your profile?")) {
      const formValue = {
        email: email,
        name: name,
        phone: phone,
        image: imageLink
      };
      console.log(formValue); // check the form value
      const data = await updateProfile(formValue);
      console.log(data.message);
    }
  };

  const handleSubmitPassword = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to update your password?")) {
      const formValue = {
        email: email,
        passwordCurrent: passwordCurrent,
        password: newPassword,
      };
      console.log(formValue); // check the form value
      const data = await updatePassword(formValue);
      console.log(data);
    }
  };

  const handleSubmitAddress = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure you want to update your address?")) {
      const formValue = {
        email: email,
        address: address,
      };
      console.log(formValue); // check the form value
      const data = await updateAddress(formValue);
      console.log(data);
    }
  };

  const [activeForm, setActiveForm] = useState('info');
  return (
    <div className="container">
        <div class="row newrow justify-content-center border border-dark">
          <div class={`col column ${activeForm === 'info' ? 'active-column' : ''}`} onClick={() => setActiveForm('info')}>PERSONAL INFO</div>
          <div class={`col column ${activeForm === 'password' ? 'active-column' : ''}`} onClick={() => setActiveForm('password')}>PASSWORD</div>
          <div class={`col column ${activeForm === 'home' ? 'active-column' : ''}`} onClick={() => setActiveForm('home')}>HOME</div>
        </div>

        <div className="row justify-content-center d-flex mt-5">
          <div className="col imgchange w-25">
            <div className="image-person">
              <img src={imageLink} alt="profile-pic" />
            </div>
          </div>

          <div className="col-lg-5 m-5" id="Info-col">
            {activeForm === 'info' && (
              <form onSubmit={handleSubmit} id="Info-form">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    value={name} onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your Phone"
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="image-link"
                    placeholder="Image Link"
                    value={imageLink} onChange={(e) => setImageLink(e.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-success mx-1">
                  Update
                </button>
              </form>
            )}

            {activeForm === 'password' && (
              <form onSubmit={handleSubmitPassword} id="Password-form">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter Your Current Password"
                    value={passwordCurrent} onChange={(e) => setPasswordCurrent(e.target.value)}
                    disabled
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Your new password"
                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-success mx-1">
                  Update password
                </button>
              </form>
            )}

            {activeForm === 'home' && (
              <form onSubmit={handleSubmitAddress} id="Address-form">
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Enter Your Name"
                    value={address} onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                
                <button type="submit" className="btn btn-success mx-1">
                  Update address
                </button>
              </form>
            )}
            
            
            
          </div>
          
        </div>

    </div>
  );
};

export default SettingsPage;
