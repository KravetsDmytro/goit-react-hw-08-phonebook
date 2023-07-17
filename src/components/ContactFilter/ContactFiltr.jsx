
import css from './ContactFilter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-slice';

export default function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(filterContact(e.target.value));

  return (
    <label className={css.label}>
<p className='titleText'>Пошук контактів</p>
      <input
        type="text"
        name="filter"
        className={css.input}
        onChange={handleFilterChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};





