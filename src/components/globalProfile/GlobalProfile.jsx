import React, { useEffect, useState } from 'react';
import cl from './GlobalProfile.module.css';
import { Link } from 'react-router-dom';

const GlobalProfile = () => {
    const [userData, setUserData] = useState(null);
    const [visibleProfile, setVisibleProfile] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        const storedUserData = localStorage.getItem('userData');

        if (storedToken && storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []); 
    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
    
        sessionStorage.removeItem('userData');
        window.location.reload();
      };

    return (
        <div>
        <div className={cl.profileContainerStudent}>
        <div className={cl.profileContainerLeftStudent}>
        <img src='/avatarStudent.svg'/>
        {userData && userData.firstname && (
        <div className={cl.dataUser}>{userData.firstname} {userData.surname}</div>
        )}
        <div className={cl.profileMenuContainer}>
        {userData && userData.group &&  userData.roles.includes('Студент') && (
        <div className={cl.group}>
        <Link to={`/group/${encodeURIComponent(userData.group)}`}>
        <img src='/groupProfile.svg'/>
        <div>Моя группа</div>
        </Link>
        </div>
        )}
        {userData && userData.group &&  userData.roles.includes('Студент') && (
            <div className={cl.progress}>
            <Link to={`/user-progress/${userData.username}`}>
                <img src='/progress.svg' alt="Успеваемость" />
                <div>Успеваемость</div>
              </Link>
            </div>
          )}
          
          {userData && userData.group && (
            <Link to={`/user-schedule/${userData.group}`}>
            <div className={cl.schedules}>
            <img src='/calendarProfile.svg'/>
            <div>Расписание</div>
            </div>
            </Link>
            
          )}
       
        <div className={cl.logout}>
        <img src='/Logout.svg'/>
        <div className={cl.Logout} onClick={handleLogout}>Выйти</div>
        </div>
        </div>
        </div>
        <div className={cl.containerRight}>
       
        <div>
        <img/>
        </div>
        </div>
        
        </div>
        
        </div>
    );
}

export default GlobalProfile;
{/*<div className={cl.GlobalProfileTitle}>Профиль</div>
        <div className={cl.GlobalProfileContainer}>
            <div><img src='userImage.svg' width='200px' /></div>
            {userData && userData.firstname && (
                <div>
            <div className={cl.NameAndSurname}>{userData.firstname}   {userData.surname}</div>
            <div className={cl.FatherName}>{userData.fathername}</div>
            <div className={cl.roles}>{userData.roles}</div>
            {userData.roles == "Студент" ? <div className={cl.groupNameProfile}>Группа {userData.group}</div> : null}
            </div>
            
            )}
            </div>*/}