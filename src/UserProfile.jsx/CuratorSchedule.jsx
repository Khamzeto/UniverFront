import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cl from './UserSchedule.module.css';
import TeacherProfile from '../components/globalProfile/TeacherProfile';
import CuratorProfile from '../components/CuratorProfile/CuratorProfile';

const CuratorSchedule = () => {
  const { groupname } = useParams();
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getScheduleByGroup = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/schedule/${groupname}`);
        setSchedule(response.data);
      } catch (error) {
        console.error('Ошибка при получении расписания:', error);
      } finally {
        setLoading(false);
      }
    };

    if (groupname) {
      getScheduleByGroup();
    }
  }, [groupname]);
  

  return (
    <div>
    <CuratorProfile/>
    <div className={cl.GlobalScheduleContainer}>
      <div className={cl.titleSchedule}>Расписание </div>
      {loading && <p>Загрузка расписания...</p>}
      {schedule ? (
        <div className={cl.contentSchedule}>
          {schedule.days.map((day, index) => (
            <div key={index}>
            <div className={cl.nameDayContainer}>
              <div className={cl.nameDay}>{day.day}</div></div>
              {day.classes.length > 0 ? (
                <div>
                  {day.classes.map((classItem, classIndex) => (
                    <div key={classIndex}>
                      {classItem.time && classItem.subject ? (
                        <div className={cl.timeAndSubjectContainer}>
                          <div className={cl.time}>{classIndex + 1}.</div>
                          <div>
                          <div className={cl.time}>{classItem.subject}</div></div>
                          <div>
                          <div className={cl.subject}>{classItem.time}</div></div>
                        </div>
                      ) : (
                        <div className={cl.notSchedule}>Нет расписания для этого дня</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className={cl.notSchedule}>Нет расписания для этого дня</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={cl.notScheduleAll}>Расписание отсутствует</div>
      )}
      <br/>
      </div>
    </div>
  );
};

export default CuratorSchedule;
