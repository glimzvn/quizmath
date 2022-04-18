import React from 'react';
import styles from './styles.module.scss';

function FeedBack() {

  return (
    <div className={styles.container}>
      <h1>FeedBack</h1>
      <form action="https://formspree.io/f/xyyonpvd" method="post" className={styles.form} >
        <label htmlFor="fname">Tên:</label>
        <input type="text" id="fname" name="fname" placeholder='Gõ tên của bạn' required />
        <label htmlFor="lname">Họ:</label>
        <input type="text" id="lname" name="lname"  placeholder='Nhập họ của bạn' required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"  placeholder='Nhập e-mail của bạn' required/>
        <label htmlFor="w3review">Nội dung:</label>
        <textarea id="w3review" name="w3review" rows="4" cols="50" required />
        <div className={styles.containerBtn}>
          <button type="submit">Gửi</button>
        </div>
      </form>
   
    </div>
  );
}

export default FeedBack;
