import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cl from './Header.module.css';
import MyModal from '../../MyModal/MyModal';

const Auth = ({ visible, setVisible, setAuth,auth }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && storedToken !== auth) {
      setAuth(storedToken);
      fetchUserData(storedToken);
    }
  }, [auth, setAuth]);
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/auth/getUserByToken', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      });

      if (response && response.data) {
        const userData = response.data;
        localStorage.setItem('userData', JSON.stringify(userData));
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', loginData);
      if (response && response.data) {
        const { token } = response.data;
        localStorage.setItem('token', token);
        setAuth(token);
        setVisible(false);
        fetchUserData(token);
      } else {
        console.error('Error during login: Invalid response format');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username' || name === 'password') {
      setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  return (
    <MyModal visible={visible} setVisible={setVisible}>
    <div className={cl.modalLogo}><img src='/logotip.svg' width="180px"/></div>
    <div className={cl.modalDescription}>Чтобы продолжить, войдите в профиль</div>
    <div className={cl.containerAuto}>
    <div className={cl.modalLoginContainer}>
    <input placeholder='Логин' className={cl.modalLoginInput} type='email' onChange={handleInputChange} name='username'></input>
    <img className={cl.modalLoginImg} src='/login.svg'/>
    </div>
    <div className={cl.modalPassContainer} >
    <input 
        placeholder='Пароль' 
        className={cl.modalPassInput} 
        type={passwordVisible ? 'text' : 'password'}
        name='password'
        onChange={handleInputChange}
        >
    </input>
  
    <img className={cl.modalPassImg} src='/password.svg'/>
    <button 
        className={cl.togglePasswordVisibility}
        onClick={togglePasswordVisibility}>
        {passwordVisible ? <img src='/seenPass.svg'/> : <img src='/seenPass.svg'/>} 
  </button>
    
    </div>
    </div>
    <div className={cl.modalRef}>Забыли пароль?</div>
    <button className={cl.modalButton} onClick={handleLogin}>Войти в аккаунт</button>
    
    </MyModal>
  )
}

export default Auth
