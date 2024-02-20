import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import cl from './TeacherMagazine.module.css';
import TeacherProfile from '../globalProfile/TeacherProfile';

const TeacherMagazine = () => {
  const [groupData, setGroupData] = useState({});
  const [subjectInput, setSubjectInput] = useState('');
  const [gradesData, setGradesData] = useState([]);

  const { groupname } = useParams();

  const handleCreateGrades = async () => {
    try {
      const validGradesData = gradesData.filter((grade) => grade.valueInput !== '' && grade.userIdInput !== '');

      if (validGradesData.length === 0) {
        console.log('Нет валидных данных для отправки');
        return;
      }

      const createGradesPayload = validGradesData.map((grade) => ({
        subject: subjectInput,
        value: grade.valueInput,
        userId: grade.userIdInput,
      }));

      await axios.post('http://localhost:5000/grades/createGrade', createGradesPayload);

      fetchData();
    } catch (error) {
      console.error('Произошла ошибка при создании оценок:', error);
    }
  };

  const fetchData = async () => {
    try {
      const encodedGroupName = encodeURIComponent(groupname);
      const response = await axios.get(`http://localhost:5000/group/getUsersInGroup/${encodedGroupName}`);

      setGroupData({
        ...groupData,
        ...response.data,
      });

      const initialGradesData = response.data.users.map((user) => ({
        valueInput: '',
        userIdInput: '',
      }));

      setGradesData(initialGradesData);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [groupname]);

  const handleGradeChange = (index, value, user) => {
    setGradesData((prevData) => {
      const newData = [...prevData];
      if (newData[index].userIdInput === '') {
        newData[index].userIdInput = user.username;
      }
      newData[index].valueInput = value;
      return newData;
    });
  };

  if (groupData.users) {
    
    const students = groupData.users.filter((user) => user.roles == 'Студент');
    return (
      <div>
      <TeacherProfile/>
      <div className={cl.containerMagazine}>
        <div className={cl.groupTitle}>
          {groupData.users &&
            groupData.users.some((user) => user.roles == 'Студент') ? (
              <div>
                <div>Журнал</div>
                <input
                  className = {cl.inputSubject}
                  placeholder="Предмет"
                  value={subjectInput}
                  onChange={(e) => setSubjectInput(e.target.value)}
                />
                {students.length > 0 && (
                  <div>
                    {students.map((user, index) => (
                      <div key={index}>
                        <div className={cl.dataUsersText}>
                          {user.firstname} {user.surname} {user.fathername}
                        </div>
                        <input
                          className = {cl.inputGrades}
                          placeholder="Оценка"
                          value={gradesData[index]?.valueInput || ''}
                          onChange={(e) => handleGradeChange(index, e.target.value, user)}
                        />
                        <input
                          className = {cl.inputUsername}
                          placeholder="userId"
                          value={gradesData[index]?.userIdInput || user.username}
                          readOnly
                        />
                      </div>
                    ))}
                  </div>
                )}
                <br />
                <br />
                <button  className={cl.buttonGrades} onClick={handleCreateGrades}>Отправить все оценки</button>
              </div>
            ) : (
              "Участники группы"
            )}
        </div>
        </div>
      </div>
    );
  }
};

export default TeacherMagazine;
