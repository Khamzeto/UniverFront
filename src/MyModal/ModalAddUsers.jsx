import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visibleAdmin,setVisibleAdmin,className }) => {
  const rootClasses = [cl.myModal];

  if (visibleAdmin) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisibleAdmin(false)}>
      <div className={`${cl.myModalContent} && ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
