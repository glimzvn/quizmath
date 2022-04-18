import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function ModalVictory({setIsModalVictory, setMainTime, setCounter, mainTime}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);

  const scores = useCallback (() => {
    clearInterval(mainTime);
    setScore(mainTime);
  }, 
  [mainTime]);
  
  useEffect(() => {
    scores();
  }, [])
  
  const handleClick = () => {
    setMainTime(30);
    setCounter(0);
    setIsModalVictory(false);
    navigate(location.pathname);
  }
  return (
    <div className={styles.container}>
      <h1>
Sau rất nhiều hy sinh, bạn đã đạt được mục tiêu của mình. Chúc mừng thành tích!</h1>
      <span>{`Thời gian còn lại: ${score}s`}</span>
      <div className={styles.containerBtn}>
        <button
          onClick={() => handleClick()}
        >
          Chơi lại
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

export default ModalVictory;
