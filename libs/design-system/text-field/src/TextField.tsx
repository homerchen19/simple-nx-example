import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  border: 2px solid black;
  border-radius: 4px;

  &:hover {
    background-color: lightblue;
  }
`;

export const TextField = (
  props: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return <StyledInput {...props} />;
};
