import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorization/authorization-requests';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  Container,
  Form,
  Label,
  LableText,
  LableInfo,
  Input,
  FormButton,
  BtnVisiblePassword,
  InputGroup,
} from './RegistrationPage.styled';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));
  };
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LableText>Enter your name</LableText>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </Label>

        <Label>
          <LableText>Enter your email address</LableText>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            autoComplete="off"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
        </Label>
        <InputGroup>
          <Label>
            <LableText>
              Enter your password
              <LableInfo>
                (minimum 7 characters you have entered {password.length})
              </LableInfo>
            </LableText>

            <Input
              onChange={handleChange}
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              autoComplete="off"
              required
              pattern="(?=.*\d).{7,}"
              title="The password must contain at least 7 characters, numbers or lowercase English letters
alphabet"
            />
            <BtnVisiblePassword
              type="button"
              onClick={togglePasswordVisible}
              data-shown={passwordVisible}
            >
              {passwordVisible ? <BsEye /> : <BsEyeSlash />}
            </BtnVisiblePassword>
          </Label>
        </InputGroup>
        <FormButton type="submit">Log in</FormButton>
      </Form>
    </Container>
  );
}
