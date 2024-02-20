import React, { useEffect, useState } from 'react';
import cl from './Header.module.css';
import MyModal from '../../MyModal/ModalProfile';
import Auth from './Auth';
import { Link } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState(null);
  const [visibleProfile, setVisibleProfile] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('userData');

    if (storedToken && storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setAuth(true);
    }
  }, []);

  

  if (auth) {
    if (!userData) {
      window.location.reload();
    }
  }

  const showOnWideScreen = window.innerWidth > 1024;
  const getProfileLink = (userData) => {
    if (userData && userData.roles) {
      if (userData.roles.includes('Студент')) {
        return `/group/${encodeURIComponent(userData.group)}`;
      } else if (userData.roles.includes('Преподаватель')) {
        return `/group-teacher/${encodeURIComponent(userData.group)}`;
      } else if (userData.roles.includes('Куратор')) {
        return `/group-curator/${encodeURIComponent(userData.username)}`;
      }
    }
    return '/default-profile-link';
  };
  

  return (
    <div>
      <div className={cl.headerContainer}>
        <Link to="/">
          <div>
            <img className={cl.logotip} src='/logotip.svg' width="140px" />
          </div>
        </Link>
        <div className={cl.headerMenuContainer}>
          <div>Учебные программы</div>
          <Link to="/news">
          <div>Новости</div>
          </Link>
          <div>О нас</div>
          <Link to="/abiturient">
          <div>Абитуриенту</div></Link>
          <div className={cl.searchContainer}>
            <img className={cl.searchImg} src='/loop.svg' width='13px' />
            <input placeholder='Поиск по сайту' type='search' className={cl.search}></input>
          </div>
        </div>
        
        <div className={cl.headerButtonsContainer}>
          {auth ? (
            showOnWideScreen && (
              <div className={cl.successMenuContainer}>
                <img src='/calendar.svg' />
                <img src='/bell.svg' />
                <div className={cl.successMenuNickname}>
                  {userData && userData.firstname ? userData.firstname : ''}
                </div>
                <Link to={getProfileLink(userData)}>
  <img className={cl.userImg} onClick={() => setVisibleProfile(true)} src='/userImage.svg' />
</Link>

              </div>
            )
          ) : (
            <button className={cl.autoButton} onClick={() => setVisible(true)}>Войти</button>
          )}

    </div>
    </div>
    <div className={cl.burgerContainer}>
    <div className={`${cl.burgerMenu} ${isActive ? cl.active : ''}`} onClick={handleClick}>
    <div className={cl.bar}></div>
    <div className={cl.bar}></div>
    <div className={cl.bar}></div></div>
  </div>
  {isModalOpen && (
    <div className={cl.modal}>
    <div className={cl.modalContent}>
    <div>О нас</div>
    <div>Новости</div>
    <div>Программы</div>
    <div>Контакты</div>
    <button className={`${cl.autoButtonBurger} ${auth ? cl.hiddenBtn : ''}`} onClick={() => setVisible(true)}>
    Войти
    </button>
    </div>
    </div>
  )}
    
    <Auth visible={visible} setVisible={setVisible} setAuth={setAuth} auth={auth}/>
    </div>
      

  )
}

export default Header
