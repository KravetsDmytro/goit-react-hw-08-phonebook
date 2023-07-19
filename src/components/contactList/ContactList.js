import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './/contactList.module.css';
import { useSelector} from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsApi';

export default function ContactList () {
  const { data = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));
  const [deleteContact] = useDeleteContactMutation();


  const handleDeleteContact = id => deleteContact(id);

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
              deleteContact={handleDeleteContact}
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


    ContactList.propTypes = {
      contacts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        })
      ),
      deleteContact: PropTypes.func,
    };
