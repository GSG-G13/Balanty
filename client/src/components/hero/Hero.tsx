import React, { FC, ReactElement } from 'react';
import { Button } from '@mui/material';
import { JoinButton, Wrapper } from './HeroSection.styled';
import HeroDescription from './HeroDescription';

interface Props {
  image: string;
  type: string;
}

const Hero: FC<Props> = ({ image, type }): ReactElement => {
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
      <Button
        variant="outlined"
        sx={{
          color: '#fff',
          borderColor: '#fff',
          position: 'absolute',
          bottom: '70px',
          right: '120px',
          transform: 'translateX(-50%)',
        }}
      >
        إنضم ك{type}
      </Button>
    </Wrapper>
  );
};

export default Hero;
