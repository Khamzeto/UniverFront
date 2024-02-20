import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visibleUserGroup,setVisibleUserGroup,className }) => {
  const rootClasses = [cl.myModal];

  if (visibleUserGroup) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisibleUserGroup(false)}>
      <div className={`${cl.myModalContent} && ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
