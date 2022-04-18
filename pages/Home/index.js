import React from 'react';
import GameOption from '../../components/ GameOption';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <h1>Math Game</h1>
      <GameOption />
    </div>
  );
}

export default Home;