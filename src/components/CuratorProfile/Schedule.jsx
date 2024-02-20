import React, { useState } from 'react';
import axios from 'axios';
import GlobalProfile from '../globalProfile/GlobalProfile';
import CuratorProfile from './CuratorProfile';

const Schedule = () => {
  const [groupname, setGroupname] = useState('');
  const [loading, setLoading] = useState(false);

  const [days, setDays] = useState({
    Понедельник: [{ time: '', subject: '' }],
    Вторник: [{ time: '', subject: '' }],
    Среда: [{ time: '', subject: '' }],
    Четверг: [{ time: '', subject: '' }],
    Пятница: [{ time: '', subject: '' }],
    Суббота: [{ time: '', subject: '' }],
  });

  const handleDayChange = (day, index, value) => {
    setDays((prevDays) => {
      const newDays = { ...prevDays };
      newDays[day][index].time = value;
      return newDays;
    });
  };

  const handleSubjectChange = (day, index, value) => {
    setDays((prevDays) => {
      const newDays = { ...prevDays };
      newDays[day][index].subject = value;
      return newDays;
    });
  };

  const addClass = (day) => {
    setDays((prevDays) => {
      const newDays = { ...prevDays };
      newDays[day].push({ time: '', subject: '' });
      return newDays;
    });
  };

  const createSchedule = async () => {
    try {
      setLoading(true);
  
      if (!groupname.trim()) {
        throw new Error('Название группы не может быть пустым');
      }
  
      const formattedDays = Object.keys(days).map((day) => ({
        day,
        classes: days[day].map(({ time, subject }) => ({ time, subject })),
        group: groupname,
      }));
  
      const response = await axios.post('http://localhost:5000/api/schedule/create', {
        days: formattedDays,
      });
  
      console.log(response.data.message);
  
      setGroupname('');
      setDays({
        Понедельник: [{ time: '', subject: '' }],
        Вторник: [{ time: '', subject: '' }],
        Среда: [{ time: '', subject: '' }],
        Четверг: [{ time: '', subject: '' }],
        Пятница: [{ time: '', subject: '' }],
        Суббота: [{ time: '', subject: '' }],
      });
    } catch (error) {
      console.error('Ошибка при создании расписания:', error.response?.data || error.message || error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <h1>Создание расписания</h1>
      <label>
        Название группы:
        <input type="text" value={groupname} onChange={(e) => setGroupname(e.target.value)} />
      </label>
      {Object.keys(days).map((day) => (
        <div key={day}>
          <h2>{day}</h2>
          <div style={{ position: 'relative', marginTop: '20px',zIndex:'99999' }}>
            {days[day].map((classItem, classIndex) => (
              <div key={classIndex}>
                <label>
                  Время:
                  <input
                    type="text"
                    value={classItem.time}
                    onChange={(e) => handleDayChange(day, classIndex, e.target.value)}
                  />
                </label>
                <label>
                  Предмет:
                  <input
                    type="text"
                    value={classItem.subject}
                    onChange={(e) => handleSubjectChange(day, classIndex, e.target.value)}
                  />
                </label>
              </div>
            ))}
            <button onClick={() => addClass(day)}>Добавить пару</button>
          </div>
        </div>
      
      ))}
      <button onClick={createSchedule} disabled={loading}>
        {loading ? 'Создание...' : 'Создать Расписание'}
      </button>
    </div>
  );
};

export default Schedule;
