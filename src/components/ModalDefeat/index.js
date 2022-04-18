import React from 'react';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function ModalDefeat({setIsModalDefeat, setMainTime}) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = () => {
    setMainTime(30);
    setIsModalDefeat(false);
    navigate(location.pathname);
  }
  return (
    <div className={styles.container}>
      <h1>Bạn đã hết thời gian!</h1>
      <div className={styles.containerBtn}>
        <button
          onClick={() => handleClick()}
        >
          Thử lại
        </button>
        <button
          onClick={() => navigate('/')}
        >
          Quay trở lại 
        </button>
      </div>
    </div>
  );
}

export default ModalDefeat;