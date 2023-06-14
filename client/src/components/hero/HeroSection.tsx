import React, { FC, ReactElement } from 'react';
import Hero from './Hero';
import { HeroSectionWrapper } from './HeroSection.styled';

const HeroSection: FC = (): ReactElement => {
  return (
    <HeroSectionWrapper>
      <Hero
        image="https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1167.jpg?w=1060&t=st=1686716098~exp=1686716698~hmac=30d4ec020d1fca140a964c191c7b8f3f7a3491b204a2bcceea9194ae8b93f9bb"
        type="لاعب"
      />
      <Hero
        image="https://img.freepik.com/free-vector/gradient-football-field-background_23-2149013356.jpg?w=996&t=st=1686716249~exp=1686716849~hmac=44983025b068e317f467b57448e2077804449d021c8fc1f0418e3f9764659683"
        type="ملعب"
      />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
