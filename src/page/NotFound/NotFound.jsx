import Cat from '../../components/images/cat.png';
import { ContainerError } from './NotFound.styled';

export default function NotFound({ error }) {
  return (
    <ContainerError>
      <p style={{ textAlign: 'center' }}>
        Oops... Something went wrong. {error} Try again later. 🙄
      </p>
      <img
        src={Cat}
        alt="Cat"
        style={{
          width: '200px',
        }}
      />
    </ContainerError>
  );
}
