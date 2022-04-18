import React from 'react';
import styles from './styles.module.scss';

function GameOption() {

  return (
    <div className={styles.container}>
        <a href='/sum'>
          <button
            type="button"
            value="sum"
          >
            <i className="bi bi-patch-plus"></i>
            <span value="a">Cộng</span>
          </button>
        </a>
        <a href='/subtraction'>
          <button
            type="button"
            value="Subtraction"
          >
            <i value="Subtraction" className="bi bi-dash-circle-dotted"></i>
            <span value="Subtraction">Trừ</span>
          </button>
        </a>
        <a href='/multiplication'>
          <button
            type="button"
            value="Multiplication"
          >
            <i className="bi bi-x-octagon"></i>
            <span>Nhân</span>
          </button>
        </a>
        <a href='/feedback'>
          <button
            type="button"
            value="FeedBack"
          >
            <i className="bi bi-chat-heart"></i>
            <span>Phản Hồi</span>
          </button>
        </a>
    </div>
  );
}

export default GameOption;