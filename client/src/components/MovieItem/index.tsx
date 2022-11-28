import React from 'react';
import styled from 'styled-components';
import { MovieItemProps } from './typing';

const Wrapper = styled.div`
  padding: 4px;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Description = styled.i``;

export const MovieItem = (props: MovieItemProps) => {
  const { movie } = props;
  return (
    <Wrapper>
      <Image src={movie?.imgUrl} />
      <Title>{movie?.title}</Title>
      <Description>{movie?.description}</Description>
    </Wrapper>
  );
};
