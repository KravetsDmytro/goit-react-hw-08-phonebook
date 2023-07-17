import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { Container, TitleH, TitleH2 } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <Container>
      <TitleH>Contacts book</TitleH>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}
