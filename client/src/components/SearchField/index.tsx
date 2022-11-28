import React, { useState } from 'react';
import { SearchFieldProps } from './typing';
import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
`;

export const SearchField = (props: SearchFieldProps) => {
  const { placeholder, onTyping } = props;
  const [text, setText] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
    onTyping?.(value);
  };

  return <Input value={text} placeholder={placeholder} onChange={onChange} />;
};
