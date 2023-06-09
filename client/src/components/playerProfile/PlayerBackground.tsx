import { Avatar } from '@mui/material';
import { Cover, AvatarWrapper, MainWrapper } from './Player.Styled';
import { playerBackgroundProps } from '../../interfaces/PLayerProfile';

const PlayerBackground = ({ avatar, cover }: playerBackgroundProps) => {
  return (
    <MainWrapper>
      <AvatarWrapper>
        <Cover alt="backgroundimage" src={cover} />
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{
            width: 145,
            height: 145,
            marginTop: -10,
            marginRight: '2.5em',
            border: '6px solid #fff',
          }}
        />
      </AvatarWrapper>
    </MainWrapper>
  );
};

export default PlayerBackground;
