import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/contacts-requests';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const changeName = e => setName(e.target.value);
  const changeNumber = e => setNumber(e.target.value);

  const handlerSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? Notify.warning(`${name} : ${number} is already in contacts`)
      : dispatch(addContactThunk(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="tel"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Name"
          onChange={changeName}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="number"
          name="number"
          value={number}
          onChange={changeNumber}
          required
          placeholder="Enter phone number"
          autoComplete="off"
        />
        <div className={css.button__wrapper}>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </div>
      </label>
    </form>
  );
}
