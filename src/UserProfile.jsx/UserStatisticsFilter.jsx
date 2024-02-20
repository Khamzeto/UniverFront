import React, { useEffect, useState } from 'react';
import GlobalProfile from '../components/globalProfile/GlobalProfile';
import cl from './UserProgress.module.css';
import { Link, useParams } from 'react-router-dom';

const UserStatisticsFilter = ({ data }) => {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();
  const groupedData = data.reduce((acc, item) => {
    const subject = item.subject;
    if (!acc[subject]) {
      acc[subject] = [];
    }


    const value = item.value === 'н' ? null : parseFloat(item.value);
    acc[subject].push(value);

    return acc;
  }, {});
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('userData');

    if (storedToken && storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const attendanceData = Object.entries(groupedData).map(([subject, values]) => {
    const total = values.length;
    const attended = values.filter(value => value !== null).length;
    const attendancePercentage = total > 0 ? (attended / total) * 100 : 0;


    let averageGrade;
    const numericValues = values.filter(value => value !== null && !isNaN(value));
    if (numericValues.length > 0) {
      averageGrade = numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length;
      averageGrade = Math.round(averageGrade);
    } else {
      averageGrade = null;
    }

    return {
      subject,
      attendancePercentage,
      averageGrade,
    };
  });

  return (
    <div>
    <GlobalProfile></GlobalProfile>
    
    <div className={cl.statistics}>
    <div className={cl.lentaStatistics}>
      {userData && userData.username ? (
        <Link to={`/user-progress/${userData.username}`}>
          <div>Лента</div>
        </Link>
      ) : (
        <div>Лента</div>
      )}
      <span>Статистика</span>
    </div>

  

      {attendanceData.length > 0 ? (
        <table>
          <thead>
            <tr className={cl.discipline}>
              <th >Дисциплина</th>
              <div className={cl.visit}>Посещаемость</div>
              <th>Успеваемость</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => (
              <tr key={index}>
                <td>{item.subject}</td>
                <td>{`${item.attendancePercentage.toFixed(2)}%`}</td>
                <td>{item.averageGrade !== null ? item.averageGrade : 'Нет данных'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Нет данных</p>
      )}
      </div>
    </div>
  );
  
};

export default UserStatisticsFilter;
