import React, { useState } from 'react';
import ModalAddGroup from '../../MyModal/ModalAddGroup';
import cl from './AdminBody.module.css';


const AddGroupModal = ({ visibleAdminGroup, setVisibleAdminGroup }) => {


  const [formData, setFormData] = useState({
    groupname: '',

  });


  const handleAddUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/group/createGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Обработка успешного ответа
        const responseData = await response.json();
        console.log('Пользователь успешно добавлен:', responseData);
        setFormData({
          groupname: '',  
        });

         

      } else {
        // Обработка ошибки
        const errorData = await response.json();
        console.error('Ошибка при добавлении пользователя:', errorData);
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
  
  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };






 
  
  return (
    <ModalAddGroup  visibleAdminGroup={visibleAdminGroup} setVisibleAdminGroup={setVisibleAdminGroup}>
      <div className={cl.AddGroupTitle}>Добавление Группы</div>
      <div className={cl.AddGroupContainer}>
        <div>
          <div className={cl.AddGroupText}>
            Название<span>*</span>
          </div>
          <input
            className={cl.AddGroupInput}
            value={formData.groupname}
            onChange={(e) => handleInputChange(e, 'groupname')}

          />
        </div>
       
      </div>
      
     
     
      <div className={cl.GroupAddButtonsContainer}>
        <button className={cl.GroupAddButtonCancel} 
          onClick={() =>   
          setFormData({  
          groupname: '',
        })}>Отмена</button>
        <button className={cl.GroupAddButtonSuccess} onClick={handleAddUser} >
          Добавить
        </button>
      </div>
      
    </ModalAddGroup>
  );
};

export default AddGroupModal;
