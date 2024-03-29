import React from 'react';
import { Avatar, Typography, SxProps } from '@mui/material';
import { FollowCard, FollowButton } from './Player.Styled';
import { CustomTheme } from '../../interfaces';

const PlayerFollows: React.FC<{ action: string; username: string }> = ({
  action,
  username,
}) => {
  const customStyles: SxProps<CustomTheme> = {
    backgroundColor: (theme: CustomTheme) =>
      theme.palette.customColors.grayColor,
  };

  return (
    <FollowCard sx={customStyles as SxProps}>
      <FollowButton>{action}</FollowButton>
      <Typography sx={{ flexGrow: '2', direction: 'rtl' }} gutterBottom>
        {username}
      </Typography>

      <Avatar
        alt="Remy Sharp"
        src="https://i.insider.com/5fbe52b350e71a00115574c4?width=700"
        sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
    </FollowCard>
  );
};

export default PlayerFollows;
