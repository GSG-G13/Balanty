import React, { FC, ReactElement } from 'react';
import { Wrapper, CustomizedButton } from './HeroSection.styled';
import HeroDescription from './HeroDescription';

interface Props {
  image: string;
  type: string;
}

const Hero: FC<Props> = ({ image, type }): ReactElement => {
  console.log(image);

  return (
    <Wrapper imageUrl={image}>
      {type === 'ملعب' && (
        <HeroDescription
          title="روَّج لملعبك الخاص"
          description="نهتم بترويج ملاعب مستخدمينا وزيادة شعبيتهم من خلال موقعنا الذي يستخدمه اللاعبون لحجز المباريات. سنعمل على الترويج لملعبك وإبراز مميزاته ومرافقه على الموقع. سوف نعرض الصور والمعلومات الهامة حول الملعب ونوفر تجارب حقيقية للعملاء الجدد.
          لا تتردد في الانضمام الينا."
        />
      )}
      {type === 'لاعب' && (
        <HeroDescription
          title="احجز المباريات ونافس"
          description="قم بالبحث عن أقرب ملعب كرة قدم إليك حسب موقعك الحالي. سوف تتصفح عدة مواقع للعثور على الملعب الأقرب لك.
          حيث يمكننك حجز لعبتك بسهولة وبضع نقرات. بعد حجز اللعبة، كن مستعداً واستمتع بأفضل لعبة كرة قدم لديك.
          لا شيء يضاهي الإثارة والمتعة التي تشعر بها عندما تلعب لعبتك المفضلة. استمتع ببعض الوقت الممتع والمرح واشعر بالتحمس أثناء اللعبة."
        />
      )}
      <CustomizedButton
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
      </CustomizedButton>
    </Wrapper>
  );
};

export default Hero;
