import React, { useState } from 'react';
import MyModal from '../../MyModal/ModalUserGroup';
import cl from './AdminBody.module.css';

const AddUserGroupModal = ({ visibleUserGroup, setVisibleUserGroup }) => {
  const [formData, setFormData] = useState({
    groupName: '',
    usernames: [],
  });

  const handleAddUser = async () => {
    console.log('Отправляемые данные:', formData);

    try {
      const response = await fetch('http://localhost:5000/group/addUsersToGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Пользователь успешно добавлен:', responseData);
        setFormData({
          groupName: '',
          usernames: [],
        });
        // You may also close the modal or perform other actions here if needed
      } else {
        const errorData = await response.json();
        console.error('Ошибка при добавлении пользователя:', errorData);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

  const handleInputChange = (e, field) => {
    if (field === 'usernames') {
      const usernamesArray = e.target.value.split(',');
      setFormData({
        ...formData,
        [field]: usernamesArray,
      });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };

  return (
    <MyModal visibleUserGroup={visibleUserGroup} setVisibleUserGroup={setVisibleUserGroup}>
      <div className={cl.AddUserGroupTitle}>Добавление пользователя в группу</div>
      <div className={cl.AddUserGroupContainer}>
        <div>
          <div className={cl.AddUserGroupText}>
            Название группы<span>*</span>
          </div>
          <input
            className={cl.AddUserGroupInput}
            onChange={(e) => handleInputChange(e, 'groupName')}
            value={formData.groupName}
          />
          <div className={cl.AddUserGroupText}>
            Никнейм пользователя<span>*</span>
          </div>
          <input
            className={cl.AddUserGroupInput}
            onChange={(e) => handleInputChange(e, 'usernames')}
            value={formData.usernames.join(',')}
          />
        </div>
      </div>

      <div className={cl.GroupUserAddButtonsContainer}>
        <button className={cl.GroupUserAddButtonCancel}>Отмена</button>
        <button className={cl.GroupUserAddButtonSuccess} onClick={handleAddUser}>
          Добавить
        </button>
      </div>
    </MyModal>
  );
};

export default AddUserGroupModal;
