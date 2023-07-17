import styled from '@emotion/styled';
export const Container = styled.div`
  width: 300px;
  margin: 40px auto 0;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
`;
export const Form = styled.form`
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 3px solid #aaa;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const LableText = styled.span`
  display: block;
  margin: 0 0 10px;
  color: #4158d0;
`;

export const LableInfo = styled.span`
  font-size: 12px;
  color: #555;
`;

export const Input = styled.input`
  width: 286px;
  padding: 5px;
  border: 1px solid #555;
  border-radius: 6px;

  margin-bottom: 15px;
`;

export const FormButton = styled.button`
  display: block;
  padding: 8px 20px;
  margin: 0 auto;
  margin-top: 30px;

  background-image: linear-gradient(
    45deg,
    #4158d0 0%,
    #c850c0 40%,
    #ffcc70 90%
  );

  border: 2px solid #747474;
  border-radius: 10px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 9px 14px 0px rgba(0, 0, 0, 0.75);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #000;
    background: #9370db;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const BtnVisiblePassword = styled.button`
  position: absolute;
  top: 50%;
  right: 6px;
  padding: 3px;
  width: 26px;
  height: 25px;
  background-color: transparent;
  color: rgb(57, 23, 23);
  border: transparent;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 300ms linear;

  &:hover {
    transform: scale(1.15);
  }

  & > svg {
    width: 17px;
    height: 17px;
  }
`;
export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 10px;
  }
`;
