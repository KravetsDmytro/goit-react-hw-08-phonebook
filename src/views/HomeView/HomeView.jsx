import React from 'react';
import css from './HomeView.module.css';
import phoneIcon from '../../img/icons8-phone-book-96.png';
import { AuthNav } from 'components/AuthNav/AuthNav';
const HomeView = () => {
  return (
    <div className={css.form}>
<div className={css.homeDiv}>
      <h1>Welcome to the contact book </h1>
      <img
        src={phoneIcon}
        width="96px"
        alt="logo phonebook"
        boxSize="200px"
        objectFit="cover"
      />
      </div>
<p className={css.authNav}><AuthNav /></p>

    </div>
  );
};
export default HomeView;
