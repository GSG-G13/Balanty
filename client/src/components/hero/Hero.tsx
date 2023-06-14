import React, { FC } from 'react';
import { JoinButton, Wrapper } from './HeroSection.styles';

interface Props {
  image: string;
  type: string;
}

const Hero: FC<Props> = ({ image, type }) => {
  return (
    <Wrapper>
      <JoinButton>إنضم ك{type}</JoinButton>
    </Wrapper>
  );
};

export default Hero;
