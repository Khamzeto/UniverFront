import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visibleAdminGroup,setVisibleAdminGroup,className }) => {
  const rootClasses = [cl.myModal];

  if (visibleAdminGroup) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisibleAdminGroup(false)}>
      <div className={`${cl.myModalContent} && ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
