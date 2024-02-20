import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import GlobalProfile from '../components/globalProfile/GlobalProfile';
import cl from './UserProgress.module.css';

const UserProgress = () => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/grades/getGradesByUsername/${username}`);
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();

    const storedToken = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('userData');

    if (storedToken && storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [username]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(new Date(dateString));
    return formattedDate;
  };

  return (
    <div>
    <GlobalProfile></GlobalProfile>
      {userData && userData.group && (
        <div className={cl.ProgressContainer}>
        
          <Link to={`/user-statistics/${userData.username}`}>
          
            <div className={cl.textStatistic}>Статистика</div>

          </Link>
  
            <div className={cl.progressStatistics}>Лента</div>

          <div>
          

                {attendanceData.map((item, index) => (
                  <div className={cl.progressContainery}  key={index}>
                  <div  className={cl.subjectContainer}>
                    <div className={cl.subject}>{item.subject} <br/><span>{formatDate(item.createdAt)}</span> </div>
                    </div>
                    <div className={cl.value}>{item.value}</div>
                  </div>
                ))}
            
        
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProgress;
