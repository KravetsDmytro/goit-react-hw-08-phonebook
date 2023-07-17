import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 400px;
  margin: 70px auto 0;
  padding: 30px;
  justify-content: space-around;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  text-align: center;
  border-bottom: 25px solid #ffcc70;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #42362b;
  transition: text-shadow 0.3s ease;
  text-shadow: rgba(130, 130, 130, 0.5) 4px 2px 3px;
`;

export const Text = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: #4158d0;
`;

export const Link = styled(NavLink)`
  color: #4158d0;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #42362b;
  }
`;
export const IconBox = styled.div`
  padding-left: 240px;
  margin-top: 80px;
  display: flex;
  gap: 20px;

  & > svg {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1200px) {
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;
