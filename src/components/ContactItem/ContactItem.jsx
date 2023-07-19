import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem  ({ name, number, id, deleteContact })  {
  return (
    <li key={id}>
      <div className={css.li}>
        <p>
          {name}:
        </p>
<p className={css.number}> {number} </p>
        <button className={css.buttonDel} type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

