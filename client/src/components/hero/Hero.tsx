import React, { FC } from 'react';
import { JoinButton, Wrapper } from './HeroSection.styles';
import HeroDescription from './HeroDescription';

interface Props {
  image: string;
  type: string;
}

const Hero: FC<Props> = ({ image, type }) => {
  return (
    <Wrapper>
      {type === 'ملعب' && (
        <HeroDescription
          title="روَج لملعبك الخاص"
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب"
          type={type}
        />
      )}
      {type === 'لاعب' && (
        <HeroDescription
          title="احجز المباريات ونافس"
          description="ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب ملعب"
          type={type}
        />
      )}
      <JoinButton>إنضم ك{type}</JoinButton>
    </Wrapper>
  );
};

export default Hero;
