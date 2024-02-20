import React, { useEffect, useState } from 'react'
import cl from './AdminBody.module.css'
import MyModal from '../../MyModal/MyModal'
import AddUserModal from './AddUserModal';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AdminBody = ({visibleAdmin,setVisibleAdmin}) => {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('Все');

  const fetchData = async (pageNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/auth/users`, {
        params: {
          page: pageNumber,
          limit: 8,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

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

  const filteredUsers = users.filter((user) =>
    `${user.firstname} ${user.surname} ${user.fathername}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) &&
    (selectedRole === 'Все' || `${user.roles}` === selectedRole) // Filter based on selected role
  );
  return (
    <div className={cl.AdminBodyContainer}>

    <div className={cl.AdminBodyLeftBg}>
    <div className={cl.AdminLeftTitle}>Админ панель</div>
    <div className={cl.UsersContainerLeft}>
    <img src='userIcon.svg'/>
    <div className={cl.UsersTextLeft}>Пользователи</div>
    </div>
    <Link to="/admin_groups" className={cl.EventsContainerLeft}>
    <img src='groupAvatar.svg' width="20px"/>
    <div className={cl.LeftGroups}>Группы</div>
    </Link>
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
    <div className={cl.CenterTextUsers}>Пользователи</div>
    <div className={cl.CenterButtons} >
    <button className={cl.UserAddButton} onClick={() => setVisibleAdmin(true)}>Добавить</button>
    <button className={cl.UserRemoveButton}>Удалить</button>
    </div>
    <div className={cl.UsersFilter}>
    <span className={cl.UsersFilterText} >Сортировка</span>
    <select className={cl.UsersSelect} onChange={(event) => setSelectedRole(event.target.value)}
    value={selectedRole}>
  <option value="Все">Все</option>
  <option value="Студент">Студент</option>
  <option value="Преподаватель">Преподаватель</option>
  <option value="Куратор">Куратор</option>
</select>

  </div>
  <div className={cl.searchUsersContainer}>
  <input 
      placeholder='Поиск пользователей' 
      className={cl.searchUsers}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}>
  </input>
  <img src='searchUsersIcon.svg'/>
  </div>
 
    

    </div>
    <div className={cl.userCardsContainer}>
    {filteredUsers.map((user, index) => (
    <div className={cl.userCard} key={index} >
    <img className={cl.userDetails} src='detailsIcon.svg'/>
    <img src='userIcon.svg' width="40px"/>
    <div className={cl.userNameMain}>{user.username}</div>
    <div className={cl.userName}>{user.firstname}  {user.surname}</div>
    <div className={cl.userName}>{user.fathername}</div>
    <div className={cl.userDescription}>{user.roles}</div>
    <div className={cl.userLink}>Перейти в профиль</div>
    </div>
    
    ))}
    </div>
    
   
    
    <AddUserModal visibleAdmin={visibleAdmin} setVisibleAdmin={setVisibleAdmin}/>
    <div className={cl.loadMoreContainer}>
    <div>
    <button onClick={handleLoadLess} className={cl.loadButtonLess}>
      Назад
  </button></div>
  <div>
    <button className={cl.loadMoreButton} onClick={handleLoadMore} >
      Далее
    </button>
    </div>

  </div>
    </div>
    
  )
}

export default AdminBody
