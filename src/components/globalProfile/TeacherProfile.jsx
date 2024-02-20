import React, { useEffect, useState } from 'react';
import cl from './GlobalProfile.module.css';
import { Link } from 'react-router-dom';

const TeacherProfile = () => {
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
        <div className={cl.profileContainer}>
        <div className={cl.profileContainerLeft}>
        <img src='/teacherAvatar.svg'/>
        {userData && userData.firstname && (
        <div className={cl.dataUser}>{userData.firstname} {userData.surname}
        <br/>
        <span>{userData.roles}</span></div>
        )}
        <div className={cl.profileMenuContainer}>
        {userData && userData.group &&  userData.roles.includes('Преподаватель') && (
        <div className={cl.group_teacher}>
        <Link to={`/group-teacher/${encodeURIComponent(userData.group)}`}>
        <img src='/groupProfile.svg'/>
        <div>Мои Ученики</div>
        </Link>
        </div>
        )}
       
          
          {userData && userData.group && (
            <Link to={`/teacher-schedule/${userData.group}`}>
            <div className={cl.schedules}>
            <img src='/calendarProfile.svg'/>
            <div>Расписание</div>
            </div>
            </Link>
            )}
            {userData && userData.group && (
                <Link to={`/magazine/${userData.group}`}>
                <div className={cl.magazine}>
                <img src='/magazine.svg'/>
                <div>Журнал</div>
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

export default TeacherProfile;