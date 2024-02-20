import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visibleProfile,setVisibleProfile,className }) => {
  const rootClasses = [cl.myModalProfile];

  if (visibleProfile) {
    rootClasses.push(cl.activeProfile);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisibleProfile(false)}>
      <div className={`${cl.myModalContentProfile} && ${className}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
