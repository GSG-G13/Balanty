import React, { FC } from 'react';
import { JoinButton, Wrapper } from './HeroSection.styled';
import HeroDescription from './HeroDescription';

interface Props {
  image: string;
  type: string;
}

const Hero: FC<Props> = ({ image, type }) => {
  return (
    <Wrapper imageUrl={image}>
      {type === 'ملعب' && (
        <HeroDescription
          title="روَج لملعبك الخاص"
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب"
        />
      )}
      {type === 'لاعب' && (
        <HeroDescription
          title="احجز المباريات ونافس"
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب"
        />
      )}
      <JoinButton>إنضم ك{type}</JoinButton>
    </Wrapper>
  );
};

export default Hero;
