import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
<button
className={css.bthHome}>Home</button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/register">
<button
className={css.bthContacts}>Contacts</button>


        </NavLink>
      )}
    </nav>
  );
};
