import { useDispatch  } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter} from 'redux/contactsSlice.js';
import css from './ContactFilter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));

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




Filter.propTypes = {
  onChange: PropTypes.func
};

export default Filter;
