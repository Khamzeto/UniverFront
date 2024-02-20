import React from 'react'
import "./Abiturient.css"

const Abiturient = () => {
  return (
    <div className="registration-container">
    <div className="registration-title">Подача документов</div> 
      <div className="form-group"> 
        <div>Фамилия</div> 
        <input/>
        <div>Имя</div> 
        <input/>
        <div>Отчество</div> 
        <input/>
      </div> 
 
      <div className="form-group"> 
        <div>Фото паспорта</div> 
        <div class="input__wrapper"> 
   <input name="file" type="file" id="input__file" class="input input__file" multiple/> 
   <label for="input__file" class="input__file-button"> 
      <span class="input__file-button-text">Выберите файл</span> 
   </label> 
</div> 
      </div> 
       
 
      <div className="form-group"> 
        <div>Документ о предыдущем образовании (аттестат, диплом)</div> 
       <input name="file" type="file" id="input__file" class="input input__file" multiple/> 
   <label for="input__file" class="input__file-button"> 
      <span class="input__file-button-text">Выберите файл</span> 
   </label> 
      </div> 
 
      <div className="form-group"> 
        <div>Копия аттестата, заверенная нотариально (для подачи в другие вузы)</div> 
       <input name="file" type="file" id="input__file" class="input input__file" multiple/> 
   <label for="input__file" class="input__file-button"> 
      <span class="input__file-button-text">Выберите файл</span> 
   </label> 
      </div> 
 
      <div className="form-group"> 
        <div>Фотография 3х4</div> 
       <input name="file" type="file" id="input__file" class="input input__file" multiple/> 
   <label for="input__file" class="input__file-button"> 
      <span class="input__file-button-text">Выберите файл</span> 
   </label> 
      </div> 
 
      <div className="form-group"> 
        <div>При наличии - военный билет или приписное свидетельство</div> 
       <input name="file" type="file" id="input__file" class="input input__file" multiple/> 
   <label for="input__file" class="input__file-button"> 
      <span class="input__file-button-text">Выберите файл</span> 
   </label> 
      </div> 
 
      <div className="form-group"> 
        <div>Медицинская справка формы 086/у (для некоторых специальностей)</div> 
       <input name="file" type="file" id="input__file" class="input input__file" multiple/> 
   <label for="input__file" class="input__file-button"> 
      <span class="input__file-button-text">Выберите файл</span> 
   </label> 
      </div> 
    </div> 
  ); 
} 

export default Abiturient
