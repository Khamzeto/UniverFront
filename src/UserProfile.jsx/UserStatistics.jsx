import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserStatisticsFilter from './UserStatisticsFilter';
import { useParams } from 'react-router-dom';

const UserStatistics = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const { username } = useParams();

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
  }, [username]);

  return (
    <div>
      <UserStatisticsFilter data={attendanceData} />
    </div>
  );
};

export default UserStatistics;

  