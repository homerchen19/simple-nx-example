import React from 'react';
import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`;

export const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};
