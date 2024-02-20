import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import cl from './GroupProfile.module.css';
import GlobalProfile from '../globalProfile/GlobalProfile';
const GroupProfile = () => {

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
      const curators = groupData.users.filter((user) => user.roles == 'Куратор');
      const teachers = groupData.users.filter((user) => user.roles == 'Преподаватель');
      const students = groupData.users.filter((user) => user.roles == 'Студент');
  return (
    <div>
    <GlobalProfile> </GlobalProfile>
    <div className={cl.GlobalContainer}>
    <div className={cl.groupTitle}>
      {groupData.users &&
        groupData.users.some((user) => user.roles == 'Студент') ? (
          <div>
          <div className={cl.groupNameTitle}>{groupname}</div>
          
          </div>
        ) : (
          "Участники группы"
        )}
    </div>

    {curators.length > 0 && (
      <div>
     
        {curators.map((user, index) => (
          <div  key={index}>
          <div className={cl.curatorTeacher}>
          <div> 
          <img src='/teacher.png'/>
          </div>
          <div>
            <div className={cl.dataUsersText}>{user.firstname}  {user.surname} {user.fathername} </div>
            <div className={cl.rolesTitle}>Куратор</div>
            </div></div>
          </div>
        ))}
      </div>
    )}

    {teachers.length > 0 && (
      <div >
      <div className={cl.teachers}>Преподаватели</div>
        {teachers.map((user, index) => (
          <div key={index}>
          <div className={cl.curatorTeacher}>
          <img src='/teacher.png'/>
          <div className={cl.dataUsersTextTeacher}>{user.firstname} {user.surname} {user.fathername} </div>
          </div></div>
        ))}
      </div>
    )}

    {students.length > 0 && (
      <div>
      <div className={cl.rolesTitleGroup}>Группа</div>
        {students.map((user, index) => (
          <div key={index}>
            <div className={cl.dataUsersTextGroup}>{index + 1}.  {user.firstname} {user.surname} {user.fathername}</div>
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

export default GroupProfile;
