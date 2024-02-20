import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import cl from '../adminBody/GroupProfile.module.css';
import TeacherProfile from '../globalProfile/TeacherProfile';
import CuratorProfile from './CuratorProfile';
const CuratorGroup = () => {

  const [groupData, setGroupData] = useState({});

  

    const { groupname } = useParams();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const encodedGroupName = encodeURIComponent(groupname);
          const response = await axios.get(`http://localhost:5000/group/getUsersInGroup/${encodedGroupName}`);



          setGroupData({
            ...groupData,
            ...response.data,
          });
        } catch (error) {
          console.error('Произошла ошибка:', error);
        }
      };
  
      fetchData();
    }, [groupname]);
    if (groupData.users) {
      const students = groupData.users.filter((user) => user.roles == 'Студент');
  return (
    <div>
    <CuratorProfile/>
    <div className={cl.teacherGroupContainer}>
    <div className={cl.groupTitle}>
      {groupData.users &&
        groupData.users.some((user) => user.roles == 'Куратор') ? (
          <div>
          <div>Мои ученики</div>
          
          </div>
        ) : (
          "Участники группы"
        )}
    </div>



    {students.length > 0 && (
      <div>
        {students.map((user, index) => (
          <div key={index}>
            <div className={cl.dataUsersText}>{index + 1}. {user.firstname} {user.surname} {user.fathername}</div>
          </div>
        ))}
      </div>
    )}
    <br/>
    <br/>
    </div>
  </div>
);

}




} 



export default CuratorGroup
