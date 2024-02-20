import React, { useEffect, useState } from 'react'
import cl from './AdminBody.module.css'
import MyModal from '../../MyModal/MyModal'
import AddGroupModal from './AddGroupModal';
import AddUserGroupModal from './AddUserGroupModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AdminBody = ({visibleAdminGroup,setVisibleAdminGroup,visibleUserGroup,setVisibleUserGroup}) => {

  const [groups, setGroups] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('Все');

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/group/getAllGroupNames`, {
        params: {
          page: pageNumber,
          limit: 8,
        },
      });
      

      if (Array.isArray(response.data.groupNames)) {
        setGroups(response.data.groupNames); 
  
      } else {
        console.error('Некорректный формат данных от API:', response.data);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
  
  console.log(groups)
  
  const handleLoadMore = () => {
    fetchData(currentPage + 1);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleLoadLess = () => {
    if (currentPage > 1) {
      fetchData(currentPage - 1);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const filteredGroups = groups.filter((groupNames) =>
  `${groupNames}`.toLowerCase().includes(searchTerm.toLowerCase())
);
  
 

  return (
    <div className={cl.AdminBodyContainer}>

    <div className={cl.AdminBodyLeftBg}>
    <div className={cl.AdminLeftTitle}>Админ панель</div>
    <div className={cl.UsersContainerLeft}>
    <img src='userIcon.svg'/>
    <Link to="/admin" className={cl.UsersTextLeft}>Пользователи</Link>
    </div>
    <div className={cl.EventsContainerLeft}>
    <img src='groupAvatar.svg' width="20px"/>
    <div className={cl.LeftGroups}>Группы</div>
    </div>
    <div className={cl.EventsContainerLeft}>
    <img src='eventsIcon.svg'/>
    <div className={cl.EventsTextLeft}>Мероприятия</div>
    </div>
    <div className={cl.ChatContainerLeft}>
    <img src='chatIcon.svg'/>
    <div className={cl.ChatTextLeft}>Чат</div>
    </div>
    </div>
    <div className={cl.CenterContainer}>
    <div className={cl.CenterTextGroup}>Группы</div>
    <div className={cl.CenterButtons} >
    <button className={cl.UserAddButtonAdd} onClick={() => setVisibleAdminGroup(true)}>Добавить</button>
    <button className={cl.UserAddButtonGroup} onClick={() => setVisibleUserGroup(true)}>Добавить пользователя в группу</button>
    </div>
    <div className={cl.UsersFilter}>

  

  </div>
  <div className={cl.searchUsersContainer}>
  <input 
      placeholder='Поиск группы' 
      className={cl.searchUsers}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}>
  </input>
  <img src='searchUsersIcon.svg'/>
  </div>
 
    

    </div>
    <div className={cl.userCardsContainer}>
    {filteredGroups.map((group, index) => (
    <div className={cl.userCard} key={index} >
    <img className={cl.userDetails} src='detailsIcon.svg'/>
    <img src='/groupAvatar.svg' width='80px'/>
    <div className={cl.userName}>{group}  </div>
    <Link to={`/group/${group}`} className={cl.userLink}>
    <div className={cl.userLink}>Посмотреть группу</div>
    </Link>
    </div>
    
    ))}
    </div>
    
   
    
    <AddGroupModal visibleAdminGroup={visibleAdminGroup} setVisibleAdminGroup={setVisibleAdminGroup}/>
    <AddUserGroupModal visibleUserGroup={visibleUserGroup} setVisibleUserGroup={setVisibleUserGroup}/>
    <div className={cl.loadMoreContainer}>
    <div>
    <button className={cl.loadButtonLess} onClick={handleLoadLess}>
      Назад
  </button></div>
  <div>
    <button  className={cl.loadMoreButton} onClick={handleLoadMore} >
      Далее
    </button>
    </div>

  </div>

    </div>
    
  )
}

export default AdminBody
