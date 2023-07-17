import { NavLink } from 'react-router-dom';
import css from './AutorisationMenu.module.css';

export default function AuthorizationMenu() {
  return (
    <>
      <div>
        <NavLink  className={css.navLink} to="/register">Registration</NavLink>
        <NavLink className={css.navLink} to="/login">Login in</NavLink>
      </div>
    </>
  );
}
