import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MySlider.css'

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div>
        <ul className="slickDots">{dots}</ul>
      </div>
    )
  };


  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        <div className="slideContent">
          <img src="slide 1.png" alt="Slide 1" />
          <div className="sliderText" >Совкомбанк» получил награду</div>
          <div className="sliderDescription">В конкурсе Global CIO «Проект года — 2023» одержал победу проект NAUMEN по созданию единой базы знаний</div>
          <button className="sliderButton">Перейти</button>
        </div>
        <div className="slideContent">
          <img src="slide 2.png" alt="Slide 2" />
          <div className="sliderText" >Совкомбанк развивает студентов</div>
          <div className="sliderDescription">"Совкомбанк — ваш путь к успеху! Развиваем студентов и выпускников вузов. Присоединяйтесь к 'Будущее в Фокусе' — получайте опыт, обучение и возможности для карьерного роста. Создавайте свое будущее вместе с нами!"</div>
          <button className="sliderButton">Перейти</button>
        </div>
        <div className="slideContent">
          <img src="image 5.png" alt="Slide 3" />
          <div className="sliderText" >Стань лучшим в своем деле!</div>
          <div className="sliderDescription">Вместе с Совкомбанком ты можешь полететь хоть в Космос! Поступай в наш университет!</div>
          <button className="sliderButton">Перейти</button>
        </div>
        <div className="slideContent">
          <img src="slide 4.png" alt="Slide 3" />
          <div className="sliderText" >Университет Совкомбанк: Ваш Путь к Успеху</div>
          <div className="sliderDescription">Выберите Университет Совкомбанк для яркого образовательного опыта и перспективного старта карьеры. Уникальные программы, квалифицированные преподаватели и современная образовательная среда ждут вас здесь!</div>
          <button className="sliderButton">Перейти</button>
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
