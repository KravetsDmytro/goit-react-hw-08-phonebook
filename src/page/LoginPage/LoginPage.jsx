import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authorization/authorization-requests';
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
} from '../RegistrationPage/RegistrationPage.styled';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
  };
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          <LableText>Enter your email address</LableText>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autocomplete="off"
            required
          />
        </Label>
        <InputGroup>
          <Label>
            <LableText>
              Enter your password
              <LableInfo>
                (minimum 7 characters, you entered {password.length})
              </LableInfo>
            </LableText>
            <Input
              type={passwordVisible ? 'text' : 'password'}
              name="password"
              value={password}
              autoComplete="off"
              required
              pattern="(?=.*\d).{7,}"
              onChange={handleChange}
              title="The password must contain at least 7 characters, numbers or lowercase letters of the English alphabet"
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
