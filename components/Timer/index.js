import React, { useEffect, useState } from 'react';
import useInterval from '../../Hooks/useInterval';
import ModalDefeat from '../ModalDefeat';
import ModalVictory from '../ModalVictory';
import styles from './styles.module.scss';


function Timer({ counter, setCounter }) {
  const [mainTime, setMainTime] = useState(30);
  const [isModalDefeat, setIsModalDefeat] = useState(false);
  const [isModalVictory, setIsModalVictory] = useState(false);
  const interval = useInterval(() => {
    setMainTime(mainTime - 1);
    if(mainTime === 0) {
      setIsModalDefeat(true);
    };
  }, 1000);

  useEffect(() => {
    if(counter === 10) {
      clearInterval(interval);
      setIsModalVictory(true);
    }
  }, [counter, interval, mainTime]);

  return (
    <>
    {isModalDefeat &&  <ModalDefeat setIsModalDefeat={setIsModalDefeat} setMainTime={setMainTime}/>}
    {isModalVictory && <ModalVictory 
      setIsModalVictory={setIsModalVictory} 
      setMainTime={setMainTime} 
      setCounter={setCounter} 
      mainTime={mainTime}
      />}
    <div className={styles.container}>
      <p className={styles.timer}>{mainTime}</p>
    </div></>
  );
}

export default Timer;
