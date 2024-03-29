import { FC, ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Avatar, Typography } from '@mui/material';

import axios from 'axios';
import { BorderBox, StyledImag, StyledUserCart } from '../../index';

import { UserCardProps, customPalette } from '../../../interfaces';

const UserCard: FC<UserCardProps> = ({
  username,
  userId,
  role,
}): ReactElement => {
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

  const getAvatar = async () => {
    try {
      if (role === 'stadium') {
        const { data } = await axios.get(`/api/v1/stadiums/details/${userId}`);
        setAvatar(data.data[0].image);
      } else {
        const { data } = await axios.get(`/api/v1/players/avatar/${userId}`);
        setAvatar(data.data);
      }
    } catch (error) {
      navigate('/serverError');
    }
  };

  useEffect(() => {
    getAvatar();
  }, [userId]);

  return (
    <BorderBox
      sx={{
        backgroundColor: theme => theme.palette.primary.grayColor,
        color: theme => theme.palette.primary.main,
        '& :hover': {
          backgroundColor: theme => theme.palette.primary.backGroundColor,
        },
      }}
      onClick={() => {
        navigate(`/profile/${role}/${userId}`);
      }}
    >
      <StyledUserCart
        sx={{
          background: theme =>
            (theme.palette as customPalette).customColors.backGroundColor,
          m: '15px 0',
        }}
        onClick={() => {
          navigate(`/profile/${role}/${userId}`);
        }}
      >
        <Typography
          sx={{
            transition: '0.2s',
            '& :hover': {
              color: theme => theme.palette.primary.main,
            },
          }}
        >
          {username}
        </Typography>
        {avatar ? (
          <StyledImag
            sx={{
              mr: '30px',
              backgroundImage: `url(${avatar})`,
            }}
          />
        ) : (
          <Avatar
            sx={{
              mr: '30px',
            }}
          >
            {username[0]}
          </Avatar>
        )}
      </StyledUserCart>
    </BorderBox>
  );
};

export default UserCard;
