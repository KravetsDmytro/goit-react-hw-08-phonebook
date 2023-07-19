import React from 'react';
import ContactForm from 'components/contactForm/ContactForm';
import Filter from 'components/ContactFilter/ContactFiltr';
import ContactList from 'components/contactList/ContactList';

export default function Contacts() {
  return (
    <div className="">
    <h1 className="">Книга контактів</h1>
    <ContactForm  />
    <Filter  />
    <ContactList  />

  </div>
  )
}

