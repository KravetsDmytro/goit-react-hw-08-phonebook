import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from '../../redux/contacts/contacts-requests';
import {
  getContacts,
  getFilter,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from '../../components/ContactItem/ContactItem';
import css from './/contactList.module.css';


export default function ContactList () {
  const data = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
  <div className={css.contactCard}>
    <ul className={css.contact}>{contactsList.length > 0 ? (
        contactsList.map(({ id, name, phone }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={phone}
              contactId={id}
            />
          );
        })
      ) : (
        <li className={css.errorLi}>
          <strong></strong>
        </li>
      )}</ul>

    </div>

    )}

