import React from 'react';
import css from './HomeView.module.css';
import phoneIcon from '../../img/icons8-phone-book-96.png';

const HomeView = () => {
  return (
    <div className={css.form}>
      <h1>Phonebook </h1>
      <img
        src={phoneIcon}
        width="96px"
        alt="logo phonebook"
        boxSize="200px"
        objectFit="cover"
      />
    </div>
  );
};
export default HomeView;
