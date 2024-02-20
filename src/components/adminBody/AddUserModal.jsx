import React, { useState } from 'react';
import ModalAddUsers from '../../MyModal/ModalAddUsers';
import cl from './AdminBody.module.css';
import { v4 as uuidv4 } from 'uuid';

const AddUserModal = ({ visibleAdmin, setVisibleAdmin }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000); 
    return String(randomNumber).padStart(8, '0'); 
};

  const [formData, setFormData] = useState({
    username: getRandomNumber(),
    firstname: '',
    surname: '',
    fathername: '',
    password: getRandomNumber(),
    roles: '',
  });

  const options = [
    { label: 'Студент', value: 'Студент', image: 'image1.jpg' },
    { label: 'Преподаватель', value: 'Преподаватель', image: 'image2.jpg' },
    { label: 'Куратор', value: 'Куратор', image: 'image3.jpg' },
  ];

  const handleOptionSelect = (value, label) => {
    setSelectedOption(label);
    setShowOptions(false);
    setFormData({
      ...formData,
      roles: value,
    });
    console.log('Выбрана опция:', value);
  };
  const handleAddUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Пользователь успешно добавлен:', responseData);
        setSubmittedData({ username: formData.username, password: formData.password });
        setFormData({
          username: getRandomNumber(),
          firstname: '',
          surname: '',
          fathername: '',
          password: getRandomNumber(),
          roles: '',
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
  const [submittedData, setSubmittedData] = useState(null);





 
  
  return (
    <ModalAddUsers className={cl.modal} visibleAdmin={visibleAdmin} setVisibleAdmin={setVisibleAdmin}>
      <div className={cl.AddUserTitle}>Добавление пользователя</div>
      <div className={cl.AddNameSurnameContainer}>
        <div>
          <div className={cl.AddUserNameSurnameTitle}>
            Имя<span>*</span>
          </div>
          <input
            className={cl.AddUserInput}
            value={formData.firstname}
            onChange={(e) => handleInputChange(e, 'firstname')}

          />
        </div>
        <div>
          <div className={cl.AddUserNameSurnameTitle}>
            Фамилия<span>*</span>
          </div>
          <input
            className={cl.AddUserInput}
            value={formData.surname}
            onChange={(e) => handleInputChange(e, 'surname')}
            

          />
        </div>
      </div>
      <div className={cl.AddUserPatronymicContainer}>
        <div className={cl.AddUserPatronymicTitle}>Отчество</div>
        <input
          className={cl.AddUserPatronymicInput}
          value={formData.fathername}
          onChange={(e) => handleInputChange(e, 'fathername')}

        />
      </div>

      <div className={cl.UsersAddSelectContainer}>
        <div className={cl.UsersAddSelectTitle}>Должность</div>
        <div className={cl.UsersAddSelect} onClick={() => setShowOptions(!showOptions)}>
          <img className={cl.UsersAddSelectIcon} src='selectIcon.svg' />
          {selectedOption || 'Должность'}
        </div>
        {showOptions && (
          <ul className={cl.UsersAddSelectUl}>
            {options.map((option, index) => (
              <li
                className={cl.UsersAddSelectLi}
                key={index}
                onClick={() => handleOptionSelect(option.value, option.label)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={cl.UsersAddButtonsContainer}>
        <button className={cl.UsersAddButtonCancel}>Отмена</button>
        <button className={cl.UsersAddButtonSuccess} onClick={handleAddUser} >
          Добавить
        </button>
      </div>
      {submittedData && (
        <div>
          <p>Отправленные данные:</p>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </ModalAddUsers>
  );
};

export default AddUserModal;
