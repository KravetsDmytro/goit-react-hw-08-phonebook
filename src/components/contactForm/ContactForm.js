import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsApi';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();


  const changeName = e => setName(e.target.value);
  const changeNumber = e => setPhone(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      phone,
      id: nanoid(),
    };
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ? alert(`${name} is already in contacts`)
    : createContact(newContact);

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
<label className={css.label} >
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
<label className={css.label}  >
  Number
  <input
    className={css.input}
     type="number"
    name="number"
    value={phone}
    onChange={changeNumber}
    required
    placeholder="+0-00-00-00"
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

