import React from 'react'
import cl from './News.module.css'
const News = () => {
  return (
    <div className={cl.newsContainer}>
    <div className={cl.newsTitle}>Новости</div>
    <div className={cl.newsCards}>
    <div>
    <img className={cl.newsImage}src='/newsWin.webp'/>
    <div className={cl.newsTagsContainer}>
    <div className={cl.newsTagFirst}>#тег 1</div>
    <div className={cl.newsTagSecond}>#тег 2</div>
    <div className={cl.newsTagThird}>#тег 3</div>
    </div>
    <div className={cl.cardTitle}>СОВКОМБАНК СТАЛ ПОБЕДИТЕЛЕМ ПРЕМИИ GREEN PROPERTY AWARDS В ТРЕХ НОМИНАЦИЯХ</div>
    <span className={cl.cardDecription}>Зеленый офис Совкомбанка признан лучшим экспертами премии Green Property Awards в номинациях «Корпоративное здание» и «ECO SMART OFFICE проект года». Совкомбанк также стал лауреатом в номинации «ESG-бренд года. Финансовые институты». Церемония награждения состоялась 9 ноября в Москве</span>
    </div>
    <div>
    <img className={cl.newsImage} src='/newsBank.webp'/>
    <div className={cl.newsTagsContainer}>
    <div className={cl.newsTagFirst}>#тег 1</div>
    <div className={cl.newsTagSecond}>#тег 2</div>
    <div className={cl.newsTagThird}>#тег 3</div>
    </div>
    <div className={cl.cardTitle}>В Мурманской области Совкомбанк начал выдавать «Единую карту жителя»</div>
    <span className={cl.cardDecription}>В Мурманской области официально начал работу проект «Единая карта жителя Мурманской области» (ЕКЖ). С октября 2022 года ЕКЖ на базе платёжной системы «Мир» и карты «Халва» можно оформить в Совкомбанке бесплатно.</span>
    
    </div>
    <div>
    <img className={cl.newsImage} src='/newsVuz.png'/>
    <div className={cl.newsTagsContainer}>
    <div className={cl.newsTagFirst}>#тег 1</div>
    <div className={cl.newsTagSecond}>#тег 2</div>
    <div className={cl.newsTagThird}>#тег 3</div>
    </div>
    <div className={cl.cardTitle}>Совкомбанк проводит студенческие вечеринки для студентов и выпускников вузов</div>
    <span className={cl.cardDecription}>Студенческие вечеринки SovcomChill пройдут в Красноярске, Саратове, Воронеже, Казани и Санкт-Петербурге. Вход для студентов бесплатный. Такой формат помогает студентам 3-4 курсов и выпускникам вузов больше узнать о яркой корпоративной жизни сотрудников Совкомбанка.</span>
    
    
    </div>
    
    </div>
    <div className={cl.newsCards}>
    <div>
    <img className={cl.newsImage}src='/forest.jpg'/>
    <div className={cl.newsTagsContainer}>
    <div className={cl.newsTagFirst}>#тег 1</div>
    <div className={cl.newsTagSecond}>#тег 2</div>
    <div className={cl.newsTagThird}>#тег 3</div>
    </div>
    <div className={cl.cardTitle}>1 октября в Совкомбанке стартует акция «Вырасти лес» для держателей карты рассрочки «Халва»</div>
    <span className={cl.cardDecription}>Участники, выполнившие задания, получат не только именной сертификат с указанием точных координат, но и возможность внести более существенный вклад в озеленение, увеличив индивидуальное количество деревьев. Чтобы клиентам было комфортнее совершать желаемые покупки, срок беспроцентной рассрочки для участников акции будет увеличен до 12 месяцев.</span>
    </div>
    <div>
    <img className={cl.newsImage} src='/newsUzbek.jpeg'/>
    <div className={cl.newsTagsContainer}>
    <div className={cl.newsTagFirst}>#тег 1</div>
    <div className={cl.newsTagSecond}>#тег 2</div>
    <div className={cl.newsTagThird}>#тег 3</div>
    </div>
    <div className={cl.cardTitle}>Российский «Совкомбанк» полностью выкупил один из госбанков Узбекистана.</div>
    <span className={cl.cardDecription}>«Совкомбанк» победил в публичном конкурсе по приватизации АКБ «Узагроэкспортбанк», организованном Агентством по управлению государственными активами Узбекистана (АУГА). Об этом сообщили в пресс-службе банка.
    </span>
    
    </div>
    <div>
    <img className={cl.newsImage} src='/newsProject.jpg'/>
    <div className={cl.newsTagsContainer}>
    <div className={cl.newsTagFirst}>#тег 1</div>
    <div className={cl.newsTagSecond}>#тег 2</div>
    <div className={cl.newsTagThird}>#тег 3</div>
    </div>
    <div className={cl.cardTitle}>«Совкомбанк» получил награду за лучший ИТ-проект 2023 года в партнерстве с NAUMEN</div>
    <span className={cl.cardDecription}>В конкурсе Global CIO «Проект года — 2023» одержал победу проект NAUMEN по созданию единой базы знаний для клиентского сервиса «Совкомбанка». Экспертное жюри присудило ему награду в номинации «Лучший проект по управлению знаниями в банковском секторе».</span>
    
    
    </div>
    
    </div>
    </div>
  )
}

export default News
