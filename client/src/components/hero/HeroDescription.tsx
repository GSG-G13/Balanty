import React, { FC } from 'react';
import {
  Description,
  DescriptionWrap,
  JoinButton,
  Title,
} from './HeroSection.styles';

interface Props {
  title: string;
  description: string;
  type: string;
}

const HeroDescription: FC<Props> = ({ title, description, type }) => {
  return (
    <DescriptionWrap>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </DescriptionWrap>
  );
};

export default HeroDescription;
