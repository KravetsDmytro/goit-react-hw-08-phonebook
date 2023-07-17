import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authorization/authorization-selector';
import { Container, Title, Text, Link, IconBox } from './HomePage.styled';
import { BsPhoneVibrate, BsPen, BsPeople } from 'react-icons/bs';
import { Footer } from '../../components/Footer/Footer';

export default function HomePage() {
  const isLoggedId = useSelector(getIsLoggedIn);
  return (
    <>
      <Container>
        <Title>Welcome to the contact book</Title>
        {isLoggedId && <Text>All functions at your service</Text>}
        {!isLoggedId && (
          <>
            <Text>
              If you are with us for the first time{' '}
              <Link to="/register">complete the registration</Link>{' '}
            </Text>
            <Text>
              If you are a regular user <Link to="/login">log in</Link>{' '}
            </Text>
          </>
        )}
        <IconBox>
          <BsPhoneVibrate /> <BsPen /> <BsPeople />
        </IconBox>
        <Footer />
      </Container>
    </>
  );
}
